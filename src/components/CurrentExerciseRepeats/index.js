import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const CurrentExerciseRepeats = ({repeats, paused, onClick}) => {
  const className = [
    'current-exercise-repeats',
    paused ? 'is-paused' : 'is-active'
  ].join(' ')

  return (<div className={className} onClick={onClick}>{repeats}</div>)
}

CurrentExerciseRepeats.PropTypes = {
  pause: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  repeats: PropTypes.number.isRequired,
}
export default CurrentExerciseRepeats
