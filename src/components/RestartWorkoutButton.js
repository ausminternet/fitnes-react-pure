import React from 'react'
import PropTypes from 'prop-types'
import RestartIcon from 'media/icons/blue/reset-filled.png'

const RestartWorkoutButton = ({onClick}) => {
  return (
    <button className="RestartWorkoutButton" onClick={onClick}>
      <img src={RestartIcon} alt="Restart workout"/>
    </button>
  )
}

RestartWorkoutButton.PropTypes = {
  onClick: PropTypes.func.isRequired,
}
