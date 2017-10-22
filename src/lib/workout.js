import sampleSize from 'lodash/sampleSize'

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function nextRepeats(exercise) {
  const min = (exercise.repeatsSetMin <= repeatsLeft(exercise))
    ? exercise.repeatsSetMin
    : repeatsLeft(exercise)
  const max = (exercise.repeatsSetMax <= repeatsLeft(exercise))
    ? exercise.repeatsSetMax
    : repeatsLeft(exercise)

  return randomNumber(min, max)
}

export function repeatsLeft(exercise) {
  const done = exercise.repeatsDone ? exercise.repeatsDone : 0
  return exercise.repeatsMax - done
}

export function sortByPercentageDone(exercises) {
  return exercises.sort((a, b) => {
    return percentageDone(a) === percentageDone(b)
      ? 0 : +(percentageDone(a) > percentageDone(b)) || -1
  })
}

export function percentageDone(exercise) {
  const done = exercise.repeatsDone ? exercise.repeatsDone : 0
  return Math.floor((done / exercise.repeatsMax) * 100)
}

export function nextExercise(exercises, currentExerciseId) {
  const exercisesLeft = exercises.filter(e => !e.isDone)
  if (exercisesLeft.length === 1) return exercisesLeft[0]
  const sortedExercises = sortByPercentageDone(exercisesLeft)
  const iMax = (sortedExercises.length === 2) ? 1 : 3
  const i = randomNumber(1, sortedExercises.length / iMax) - 1
  return (currentExerciseId === sortedExercises[i]).id
    ? nextExercise(exercises)
    : sortedExercises[i]
}

export function done(exercises) {
  return exercises.every(e => e.isDone)
}

export function setEffort(exercises, effort) {
  return exercises.map(e => {
    return {
      ...e,
      repeatsMax: Math.ceil(e.repeatsMax / 100 * effort)
    }
  })
}

export function doCurrentRepeats(
  exercises,
  currentExerciseId,
  currentRepeats
) {
  return exercises.map(e => {
    if (e.id === currentExerciseId) {
      let done = e.repeatsDone ? e.repeatsDone : 0
      done += currentRepeats
      return {...e,
        repeatsDone: done,
        isDone: done === e.repeatsMax,
      }
    }
    return e
  })
}

export function resetExercises(exercises) {
  return exercises.map(e => {
    return {...e,
      repeatsDone: 0,
      isDone: false,
    }
  })
}

export function createRandomWorkout(nextExercises, lastExercises, number = 6) {
  let differentExercises =
    nextExercises.filter(e => lastExercises.indexOf(e.id) === -1)
  // console.log('initialDiff:', differentExercises)
  // console.log('last:', lastExercises)
  if (differentExercises.length > number) {
    return sampleSize(differentExercises, number)
  }
  if (differentExercises.length === number) {
    // console.log('===')
    differentExercises = sampleSize(differentExercises, 4)
    // console.log('newDiff:', differentExercises)
  }
  const nextExerciseWithoutDifferent =
    nextExercises.filter(e => !differentExercises.includes(e))
  // console.log('nextWithutDiff:', nextExerciseWithoutDifferent)
  const missing = number - differentExercises.length
  const sameNextExercises = sampleSize(nextExerciseWithoutDifferent, missing)
  // console.log('same:', sameNextExercises)
  // console.log('next', [...sameNextExercises, ...differentExercises])
  return [...sameNextExercises, ...differentExercises]
}
