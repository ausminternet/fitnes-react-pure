import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Loader from 'components/Loader'

const LogList = ({loading, logs}) => {
  if (loading) return <Loader />

  return (
    <div className="log-list">
      {logs.length === 0 &&
        <div className="random-workouts__no-exercises">
          No Logs available. Go and do your first workout!
        </div>
      }
      {logs.length !== 0 && logs.map((l, i) => {
        return (
          <div key={i}>
            <Link to={`/logs/${l.id}`}>
              <div>ID: {l.id}</div>
              <div>StartedAt: {new Date(l.startedAt).toISOString()}</div>
              <div>ElapsedTime: {l.elapsedTime}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

LogList.PropTypes = {
  efforts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  showNoExercises: PropTypes.bool.isRequired,
}

export default LogList
