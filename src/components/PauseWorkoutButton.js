import React from 'react'
import PauseIcon from 'media/icons/white/pause-filled.png'
import ResumeIcon from 'media/icons/white/resume-filled.png'

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
