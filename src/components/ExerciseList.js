import React from 'react'
import Loader from 'components/Loader'
import ExerciseListEntry from 'components/ExerciseListEntry'
import ListEntry from 'components/ListEntry'

const ExerciseList = ({
  loading,
  exercises,
  onExerciseChange,
  onExerciseDelete,
  showAddForm
}) => {
  if (loading) return <Loader />
  return (
    <div className="exercise-list">
      {exercises.length !== 0 && exercises.map((e) => {
        return (
          <ListEntry key={e.id}>
            <ExerciseListEntry
              exercise={e}
              exercises={exercises}
              onExerciseChange={onExerciseChange}
              onDelete={onExerciseDelete}/>
          </ListEntry>
        )
      })}
    </div>
  )
}

export default ExerciseList
