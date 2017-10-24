import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const CurrentExerciseName = ({name}) => {
  return (<div className="current-exercise-name">{name}</div>)
}

CurrentExerciseName.PropTypes = {
  name: PropTypes.string.isRequired,
}

export default CurrentExerciseName
