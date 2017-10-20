import React from 'react'
import StartWorkoutButton from 'components/StartWorkoutButton'

export default function StartRandomWorkoutButton ({effort, children}) {
  return (
    <StartWorkoutButton to={'/workout/random/' + effort}
    >
      {children}
    </StartWorkoutButton>
  )
}
