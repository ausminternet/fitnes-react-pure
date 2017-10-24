import React from 'react'
import PropTypes from 'prop-types'

import ActiveWorkoutIconButton from 'components/ActiveWorkoutIconButton'

import PauseIcon from 'media/icons/white/pause-filled.png'
import ResumeIcon from 'media/icons/white/resume-filled.png'

const PauseWorkoutButton = ({paused, onClick}) => {
  return (
    <ActiveWorkoutIconButton
      className="pause-button"
      onClick={onClick}
    >
      <img
        src={paused ? ResumeIcon : PauseIcon}
        alt={paused ? 'resume workout' : 'pause workout'}/>
    </ActiveWorkoutIconButton>
  )
}

PauseWorkoutButton.PropTypes = {
  pause: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PauseWorkoutButton
