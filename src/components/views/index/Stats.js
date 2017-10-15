import React from 'react'
import Stat from './Stat'

export default function WorkoutStats ({ exercises }) {
  return (
    <div className="Stats">
      {exercises.map(e => (
        <Stat key={e.id} {...e} />
      ))}
    </div>
  )
}
