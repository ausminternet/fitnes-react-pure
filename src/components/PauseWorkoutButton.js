import React from 'react'
import PropTypes from 'prop-types'
import PauseIcon from 'media/icons/white/pause-filled.png'
import ResumeIcon from 'media/icons/white/resume-filled.png'

const PauseWorkoutButton = ({paused, onClick}) => {
  return (
    <button
      className="PauseWorkoutButton"
      onClick={onClick}
    >
      <img src={paused ? ResumeIcon : PauseIcon} alt="toggle workout"/>
    </button>
  )
}

PauseWorkoutButton.PropTypes = {
  pause: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PauseWorkoutButton
