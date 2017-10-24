import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Timer = ({time, paused, pausedText}) => {
  return (
    <div className="timer">
      {paused ? pausedText : time}
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
  pausedText: PropTypes.string.isRequired,
}

export default Timer
