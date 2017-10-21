import React from 'react'
import PropTypes from 'prop-types'

export const TopBar = ({ children }) => {
  return (
    <div className="TopBar">
      {children}
    </div>
  )
}

TopBar.PropTypes = {
  children: PropTypes.node
}

export const TopBarLeft = ({ children }) => {
  return (
    <div className="TopBarLeft">
      {children}
    </div>
  )
}

TopBarLeft.PropTypes = {
  children: PropTypes.node
}

export const TopBarRight = ({ children }) => {
  return (
    <div className="TopBarRight">
      {children}
    </div>
  )
}

TopBarRight.PropTypes = {
  children: PropTypes.node
}

export const TopBarCenter = ({ children }) => {
  return (
    <div className="TopBarCenter">
      <h1>{children}</h1>
    </div>
  )
}

TopBarCenter.PropTypes = {
  children: PropTypes.node
}
