import React from 'react'
import Stat from 'components/Stat'

export default function WorkoutStats ({ exercises }) {
  return (
    <div className="Stats">
      {exercises.map(e => (
        <Stat key={e.id} {...e} />
      ))}
    </div>
  )
}
