import React from 'react'
import {Link} from 'react-router-dom'

import BackIcon from 'media/icons/black/back-filled.png'

import './styles.css'

const LogListEntry = ({log}) => {
  let date = new Date(log.startedAt)

  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()

  date = day + '.' + month + '.' + year

  console.log(log)

  return (
    <Link
      to={`/logs/${log.id}`}
      className="log-list-entry"
      onTouchStart={() => true}
    >
      <div className="log-list-entry__arrow"></div>
      <div className="log-list-entry__date">
        {date}
      </div>
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
