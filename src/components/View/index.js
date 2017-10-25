import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const View = ({name, children, withTabBar = true, withTopBar = true}) => {
  const className = [
    'view',
    name ? 'view--' + name : null,
    withTabBar ? 'view--with-tab-bar' : null,
    withTopBar ? 'view--with-top-bar' : null,
  ].join(' ')

  return (<section className={className}>{children}</section>)
}

View.PropTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  withTabBar: PropTypes.bool,
  withTopBar: PropTypes.bool,
}

export default View
