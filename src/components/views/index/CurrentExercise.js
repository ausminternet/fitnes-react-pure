import React from 'react'

export default function CurrentExercise({name, repeats, paused, onClick}) {
  return (
    <div
      className={'CurrentExercise ' + (paused ? 'paused' : 'active')}
      onClick={onClick}
    >
      <div className="name">{name}</div>
      <div className="repeats">{repeats}</div>
    </div>
  )
}
