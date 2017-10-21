import React from 'react'
import PropTypes from 'prop-types'

const View = ({name, children, withTabBar = true, withTopBar = true}) => {
  const className = [
    'View',
    name,
    withTabBar ? 'withTabBar' : null,
    withTopBar ? 'withTopBar' : null,
  ].join(' ')

  return (<div className={className}>{children}</div>)
}

View.PropTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  withTabBar: PropTypes.bool,
  withTopBar: PropTypes.bool,
}

export default View
