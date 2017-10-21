import React from 'react'
import PropTypes from 'prop-types'
import StartWorkoutButton from 'components/StartWorkoutButton'

const StartRandomWorkoutButton = ({effort, children}) => {
  return (
    <StartWorkoutButton to={'/workout/random/' + effort}
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
