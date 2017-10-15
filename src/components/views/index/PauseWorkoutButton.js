import React from 'react'
import PauseIcon from '../../../media/icons/pause.png'
import ResumeIcon from '../../../media/icons/resume.png'

export default function PauseWorkoutButton({paused, onClick}) {
  return (
    <button
      className="PauseWorkoutButton"
      onClick={onClick}
    >
      <img src={paused ? ResumeIcon : PauseIcon} alt="toggle workout"/>
    </button>
  )
}
