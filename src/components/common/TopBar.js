import React from 'react'

export const TopBar = ({ children }) => {
  return (
    <div className="TopBar">
      {children}
    </div>
  )
}

export const TopBarLeft = ({ children }) => {
  return (
    <div className="TopBarLeft">
      {children}
    </div>
  )
}

export const TopBarRight = ({ children }) => {
  return (
    <div className="TopBarRight">
      {children}
    </div>
  )
}

export const TopBarCenter = ({ children }) => {
  return (
    <div className="TopBarCenter">
      {children}
    </div>
  )
}
