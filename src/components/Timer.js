import React from 'react'
import PropTypes from 'prop-types'

const Timer = ({time, paused, pausedText}) => {
  return (
    <div className="Timer">
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
