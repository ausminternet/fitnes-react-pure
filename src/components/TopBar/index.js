import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export const TopBar = ({ children }) => {
  return (
    <div className="top-bar">
      {children}
    </div>
  )
}

TopBar.PropTypes = {
  children: PropTypes.node
}

export const TopBarLeft = ({ children }) => {
  return (
    <div className="top-bar__left">
      {children}
    </div>
  )
}

TopBarLeft.PropTypes = {
  children: PropTypes.node
}

export const TopBarRight = ({ children }) => {
  return (
    <div className="top-bar__right">
      {children}
    </div>
  )
}

TopBarRight.PropTypes = {
  children: PropTypes.node
}

export const TopBarCenter = ({ children }) => {
  return (
    <div className="top-bar__center">
      <h1 className="top-bar__title">{children}</h1>
    </div>
  )
}

TopBarCenter.PropTypes = {
  children: PropTypes.node
}
