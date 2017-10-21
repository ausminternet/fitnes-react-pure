import React from 'react'
import PropTypes from 'prop-types'
import DoneIcon from 'media/icons/black/done-filled.png'

const Stat = ({name, repeatsDone = 0, repeatsMax}) => {
  const percentDone = Math.floor((repeatsDone / repeatsMax) * 100)
  const repeatsLeft = repeatsMax - repeatsDone
  const repeats = (repeatsLeft === 0) ? <img src={DoneIcon} alt="done" /> : repeatsLeft

  return (
    <div className="Stat">
      <div className="data">
        <div className="name">
          {name}
        </div>
        <div className="repeatsLeft">
          {repeats}
        </div>
      </div>
      <div className="progressbar">
        <div
          className="progress"
          style={{width: percentDone + '%'}}
        ></div>
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
