import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
// import { currentUser } from 'lib/auth'

import config from 'config/firebase'

firebase.initializeApp(config)
firebase.firestore().enablePersistence()

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const getAllExercises = async (uid) => {
  const collection = 'users/' + uid + '/exercises'
  const data = await firestore.collection(collection).get()
  let exercises = []
  data.forEach((e) => {
    const d = e.data()
    exercises.push({
      id: e.id,
      name: d.name,
      repeatsMax: d.repeatsMax,
      repeatsSetMax: d.repeatsSetMax,
      repeatsSetMin: d.repeatsSetMin,
    })
  })
  return exercises
}

export const getLogs = async (uid) => {
  const collection = `users/${uid}/log`
  const data = await firestore.collection(collection)
    .orderBy('startedAt', 'desc').get()
  let workouts = []
  data.forEach((w) => {
    const d = w.data()
    workouts.push({
      id: w.id,
      startedAt: d.startedAt,
      elapsedTime: d.elapsedTime,
      exercises: w.exercises
    })
  })
  return workouts
}

export const getLog = async (uid, logId) => {
  const collection = `users/${uid}/log`
  const data = await firestore.collection(collection).doc(logId).get()
  const d = data.data()
  const log = {
    id: data.id,
    startedAt: d.startedAt,
    elapsedTime: d.elapsedTime,
    type: d.type,
    effort: d.effort,
    exercises: d.exercises,
  }
  return log
}

export const getLastExercises = async (uid) => {
  const collection = `users/${uid}/log`
  const data = await firestore.collection(collection)
    .orderBy('startedAt', 'desc')
    .limit(1)
    .get()
  const exercises = []
  data.forEach((e) => {
    e.data().exercises.forEach((e) => {
      exercises.push(e.id)
    })
  })
  return exercises
}

export const saveWorkout = async (uid, workout) => {
  const collection = 'users/' + uid + '/log'
  const docRef = await firestore.collection(collection).add(workout)
  console.log(docRef.id)
  return docRef.id
}

export function signUp (email, pw) {
  return auth.createUserWithEmailAndPassword(email, pw)
}

export function logout () {
  return auth.signOut()
}

export function login (email, pw) {
  return auth.signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return auth.sendPasswordResetEmail(email)
}

export function currentUser() {
  return auth.currentUser
}
