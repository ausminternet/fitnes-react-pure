import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const ActiveWorkoutIconButton = ({onClick, className, children, ...rest}) => {
  return (
    <button
      className={className + ' active-workout-icon-button'}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

ActiveWorkoutIconButton.PropTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.shape({
    uri: PropTypes.string,
  }),
}

export default ActiveWorkoutIconButton
