import React from 'react'
import PropTypes from 'prop-types'
import Stat from 'components/Stat'

import './styles.css'

const Stats = ({ exercises }) => {
  return (
    <div className="stats">
      {exercises.map(e => (
        <Stat key={e.id} {...e} />
      ))}
    </div>
  )
}

Stats.PropTypes = {
  exercises: PropTypes.array
}

export default Stats
