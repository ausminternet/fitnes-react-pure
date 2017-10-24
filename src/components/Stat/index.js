import React from 'react'
import PropTypes from 'prop-types'
import DoneIcon from 'media/icons/black/done-filled.png'

import './styles.css'

const Stat = ({name, repeatsDone = 0, repeatsMax}) => {
  const percentDone = Math.floor((repeatsDone / repeatsMax) * 100)
  const repeatsLeft = repeatsMax - repeatsDone
  const repeats = (repeatsLeft === 0)
    ? <img src={DoneIcon} alt="done" className="stat__done" />
    : repeatsLeft

  return (
    <div className="stat">
      <div className="stat__name">{name}</div>
      <div className="stat__repeats">{repeats}</div>
      <div className="stat__progressbar">
        <div className="stat__progress" style={{width: percentDone + '%'}}>
        </div>
      </div>
    </div>
  )
}

Stat.PropTypes = {
  name: PropTypes.string.isRequired,
  repeatsDone: PropTypes.number.isRequired,
  repeatsMax: PropTypes.number.isRequired
}

export default Stat
