import React from 'react'

import './styles.css'

const PrimaryButton = ({ children }) => {
  const primaryButtonClassName = 'primary-button'

  const className = children.props.className
    ? [children.props.className, primaryButtonClassName].join(' ')
    : primaryButtonClassName

  return React.cloneElement(children, {className})
}

export default PrimaryButton
