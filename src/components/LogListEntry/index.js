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
    >
      <div className="log-list-entry__arrow"></div>
      <time className="log-list-entry__date" dateTime={date.toISOString()}>
        {day}
      </time>
      {log.type === 'random' &&
      <div className="log-list-entry__details">
        <span className="log-list-entry__type log-list-entry__type--random">
            Random workout:
        </span>
        <span className="log-list-entry__effort">
          {log.effort}% Effort
        </span>
      </div>
      }
      {log.type === 'planned' &&
      <div className="list-entry__details">
        <span className="log-list-entry__type log-list-entry__type--planned">
              Planned workout:
        </span>
        <span className="log-list-entry__name">
        </span>
      </div>
      }
    </Link>
  )
}

export default LogListEntry
