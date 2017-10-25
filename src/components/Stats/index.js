import React from 'react'
import PropTypes from 'prop-types'
import Stat from 'components/Stat'

import './styles.css'

const Stats = ({ exercises, currentExerciseId }) => {
  return (
    <div className="stats">
      {exercises.map(e => (
        <Stat key={e.id} {...e} current={e.id === currentExerciseId} />
      ))}
    </div>
  )
}

Stats.PropTypes = {
  exercises: PropTypes.array,
  currenExerciseId: PropTypes.string.isRequired.isRequired,
}

export default Stats
