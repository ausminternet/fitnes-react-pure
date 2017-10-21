import React from 'react'
import PropTypes from 'prop-types'

const ViewContent = ({children, ...rest}) => {
  return (<div className="ViewContent" {...rest}>{children}</div>)
}

ViewContent.PropTypes = {
  children: PropTypes.node
}

export default ViewContent
