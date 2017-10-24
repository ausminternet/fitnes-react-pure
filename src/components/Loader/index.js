import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Loader = ({children, full, delayed = true}) => {
  const className = [
    'loader',
    full ? 'loader--full' : '',
    delayed ? 'loader--delayed' : '',
  ].join(' ')

  return (
    <div className={className}>
      <div className="loader__circles">
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
        <span className="loader__circle"></span>
      </div>
      <p className="loader__text">{children}</p>
    </div>
  )
}

Loader.propTypes = {
  full: PropTypes.bool,
  children: PropTypes.node
}

export default Loader
