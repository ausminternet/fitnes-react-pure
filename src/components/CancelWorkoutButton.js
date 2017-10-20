import React from 'react'
// import {NavLink} from 'react-router-dom'
import CancelIcon from 'media/icons/white/delete-filled.png'

export default function CancelWorkoutButton({onClick, showIcon = true, children}) {
  return (
    <button
      className="CancelWorkoutButton"
      onClick={onClick}
    >
      {showIcon &&
        <img src={CancelIcon} alt="Back"/>
      }
      {children &&
        <span className="text">{children}</span>
      }
    </button>
  )
}
