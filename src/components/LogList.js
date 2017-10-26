import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'components/Loader'
import LogListEntry from 'components/LogListEntry'
import Message from 'components/Message'

const LogList = ({loading, logs}) => {
  if (loading) return <Loader />

  return (
    <div className="log-list">
      {logs.length === 0 &&
        <Message>
          <p>No Logs available.</p>
          <p><strong>Go and do your first workout!</strong></p>
        </Message>
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
