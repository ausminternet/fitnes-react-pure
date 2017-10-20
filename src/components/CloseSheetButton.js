import React from 'react'
import CancelIcon from 'media/icons/blue/delete-filled.png'

export default function CloseSheetButton({onClick, showIcon = true, children}) {
  return (
    <button
      className="CloseSheetButton"
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
