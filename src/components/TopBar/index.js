import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export const TopBar = ({ children }) => {
  return (
    <header className="top-bar">
      {children}
    </header>
  )
}

TopBar.PropTypes = {
  children: PropTypes.node
}

export const TopBarLeft = ({ children }) => {
  return (
    <section className="top-bar__left">
      {children}
    </section>
  )
}

TopBarLeft.PropTypes = {
  children: PropTypes.node
}

export const TopBarRight = ({ children }) => {
  return (
    <section className="top-bar__right">
      {children}
    </section>
  )
}

TopBarRight.PropTypes = {
  children: PropTypes.node
}

export const TopBarCenter = ({ children }) => {
  return (
    <section className="top-bar__center">
      <h1 className="top-bar__title">{children}</h1>
    </section>
  )
}

TopBarCenter.PropTypes = {
  children: PropTypes.node
}
