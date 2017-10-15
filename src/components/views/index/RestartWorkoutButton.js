import React from 'react'
import RestartIcon from '../../../media/icons/restart.png'

export default function RestartWorkoutButton({onClick}) {
  return (
    <button
      className="RestartWorkoutButton"
      onClick={onClick}
    >
      <img src={RestartIcon} alt="Restart workout"/>
    </button>
  )
}