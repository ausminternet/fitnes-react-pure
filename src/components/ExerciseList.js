import React from 'react'
import Loader from 'components/Loader'
import Message from 'components/Message'
import ExerciseListEntry from 'components/ExerciseListEntry'
import ListEntry from 'components/ListEntry'

const ExerciseList = ({
  loading, exercises, onExerciseChange, onExerciseDelete
}) => {
  if (loading) return <Loader />
  return (
    <div className="exercise-list">
      {exercises.length === 0 &&
        <Message>
          <p>No exercises available.</p>
          <p><strong>Go and create your first exercise!</strong></p>
        </Message>
      }
      {exercises.length !== 0 && exercises.map((e) => {
        return (
          <ListEntry key={e.id}>
            <ExerciseListEntry exercise={e} exercises={exercises} onExerciseChange={onExerciseChange} onDelete={onExerciseDelete}/>
          </ListEntry>
        )
      })}
    </div>
  )
}

export default ExerciseList
