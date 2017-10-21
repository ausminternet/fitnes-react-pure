import React from 'react'

export default function CurrentExercise({name, repeats, paused, onClick}) {
  const className = [
    'CurrentExercise',
    paused ? 'paused' : 'active'
  ].join(' ')

  return (
    <div
      className={className}

    >
      <div className="name">{name}</div>
      <div className="repeats" onClick={onClick}>{repeats}</div>
    </div>
  )
}
