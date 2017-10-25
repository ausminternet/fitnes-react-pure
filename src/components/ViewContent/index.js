import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const ViewContent = ({children, ...rest}) => {
  return (<main className="view-content" {...rest}>{children}</main>)
}

ViewContent.PropTypes = {
  children: PropTypes.node
}

export default ViewContent
