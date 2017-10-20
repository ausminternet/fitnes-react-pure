import React from 'react'
import StartRandomWorkoutButton from 'components/StartRandomWorkoutButton'
import ContentHeader from 'components/ContentHeader'

export default function RandomWorkouts({efforts}) {
  const workouts = efforts.map((e, i) => {
    return (
      <StartRandomWorkoutButton key={i} effort={e}>
        {e}
      </StartRandomWorkoutButton>
    )
  })
  return (
    <div className="RandomWorkouts">
      <ContentHeader>Random Workouts</ContentHeader>
      <div className="buttons">
        {workouts}
      </div>
    </div>
  )
}
