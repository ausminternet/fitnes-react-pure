import React from 'react'
import PropTypes from 'prop-types'

import Loader from 'components/Loader'

const SingleLog = ({loading, log}) => {
  if (loading) return <Loader />

  return (
    <div>
      <div>id: {log.id}</div>
      <div>type: {log.type}</div>
      <div>effort: {log.effort}</div>
      <div>startedAt: {new Date(log.startedAt).toISOString()}</div>
      <div>elapsedTime:
        {new Date(log.elapsedTime).toISOString().substr(11, 8)}
      </div>
      <div>exercises:
        <ul>
          {log.exercises.map((e, i) => {
            return (
              <li key={i}>
                <div>name: {e.name}</div>
                <div>repeats: {e.repeats}</div>
              </li>
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}

SingleLog.PropTypes = {
  loading: PropTypes.bool.isRequired,
  log: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    effort: PropTypes.number,
    startedAt: PropTypes.number,
    elapsedTime: PropTypes.number,
    exercises: PropTypes.shape({
      name: PropTypes.string,
      repeats: PropTypes.number,
    })
  }).isRequired,
}

export default SingleLog
