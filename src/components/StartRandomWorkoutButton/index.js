import React from 'react'
import PropTypes from 'prop-types'
import StartWorkoutButton from 'components/StartWorkoutButton'

import './styles.css'

const StartRandomWorkoutButton = ({effort, children}) => {
  return (
    <StartWorkoutButton
      className="start-random-workout-button"
      to={'/workout/random/' + effort}
    >
      {children}
    </StartWorkoutButton>
  )
}

StartRandomWorkoutButton.PropTypes = {
  effort: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default StartRandomWorkoutButton
