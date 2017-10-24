import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const View = ({name, children, withTabBar = true, withTopBar = true}) => {
  const className = [
    'view',
    'view--' + name,
    withTabBar ? 'view--with-tab-bar' : null,
    withTopBar ? 'view--with-top-bar' : null,
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
