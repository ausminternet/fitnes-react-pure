import React from 'react'

import './styles.css'

const PrimaryButton = ({ children }) => {
  return React.cloneElement(children, {
    className: children.props.className + ' primary-button'
  })
}

export default PrimaryButton
