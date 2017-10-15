import React from 'react'
import RandomWorkoutButton from './RandomWorkoutButton'

export default function RandomWorkout({onEffortChoose}) {
  return (
    <div className="RandomWorkout">
      <h1>Random workout</h1>
      <div className="buttons">
        <RandomWorkoutButton
          effort={1}
          onClick={(effort) => onEffortChoose(effort)}
        />
        <RandomWorkoutButton
          effort={30}
          onClick={(effort) => onEffortChoose(effort)}
        />
        <RandomWorkoutButton
          effort={60}
          onClick={(effort) => onEffortChoose(effort)}
        />
        <RandomWorkoutButton
          effort={100}
          onClick={(effort) => onEffortChoose(effort)}
        />
      </div>
    </div>
  )
}
