import React from 'react'
import PropTypes from 'prop-types'

import ActiveWorkoutIconButton from 'components/ActiveWorkoutIconButton'

import CancelIcon from 'media/icons/white/delete-filled.png'

const CancelWorkoutButton = ({onClick, children}) => {
  return (
    <ActiveWorkoutIconButton
      className="cancel-button"
      onClick={onClick}
    >
      <img src={CancelIcon} alt="cancel workout"/>
    </ActiveWorkoutIconButton>
  )
}

CancelWorkoutButton.PropTypes = {
  onClick: PropTypes.func.isRequired
}
export default CancelWorkoutButton
