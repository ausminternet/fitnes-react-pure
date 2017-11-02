import React from 'react'

import './styles.css'

const Secondarybutton = ({ children }) => {
  const secondarybuttonClassName = 'secondary-button'

  const className = children.props.className
    ? [children.props.className, secondarybuttonClassName].join(' ')
    : secondarybuttonClassName

  return React.cloneElement(children, {className})
}

export default Secondarybutton
