import React from 'react'

export default function RandomWorkoutButton ({effort, onClick}) {
  return (
    <button
      className="RandomWorkoutButton"
      onClick={() => onClick(effort)}
    >
      <span className="effort">{effort}%</span>
    </button>
  )
}
