import React from 'react'

export default function CurrentExercise({name, repeats, paused, onClick}) {
  return (
    <div
      className={'CurrentExercise ' + (paused ? 'paused' : 'active')}

    >
      <div className="name">{name}</div>
      <div className="repeats" onClick={onClick}>{repeats}</div>
    </div>
  )
}
