import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const ViewContent = ({children, ...rest}) => {
  return (<div className="view-content" {...rest}>{children}</div>)
}

ViewContent.PropTypes = {
  children: PropTypes.node
}

export default ViewContent
