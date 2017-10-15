import React from 'react'
import CancelIcon from '../../../media/icons/cancel.png'

export default function CancelWorkoutButton({onClick}) {
  return (
    <button
      className="CancelWorkoutButton"
      onClick={onClick}
    >
      <img src={CancelIcon} alt="Back"/>
    </button>
  )
}
