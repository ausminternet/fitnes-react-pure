import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

const LogListEntry = ({log}) => {
  let date = new Date(log.startedAt)

  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  const cleanDate = day + '.' + month + '.' + year

  return (
    <Link
      to={`/logs/${log.id}`}
      className="log-list-entry"
      onTouchStart={() => true}
    >
      <div className="log-list-entry__arrow"></div>
      <time className="log-list-entry__date" dateTime={date.toISOString()}>
        {cleanDate}
      </time>
      {log.type === 'random' &&
        <span className="log-list-entry__type log-list-entry__type--random">
            Random workout:
        </span>
      }
      {log.type === 'planned' &&
        <span className="log-list-entry__type log-list-entry__type--planned">
            Planned workout:
        </span>
      }
      {log.type === 'random' &&
        <span className="log-list-entry__effort">
          {log.effort}% Effort
        </span>
      }
    </Link>
  )
}

export default LogListEntry
