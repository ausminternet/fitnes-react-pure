import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'components/Loader'
import LogListEntry from 'components/LogListEntry'

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
        return (<LogListEntry log={l} key={i}/>)
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
