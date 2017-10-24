import React from 'react'

import './styles.css'

const Message = ({children}) => {
  return (
    <div className="message">
      {children}
    </div>
  )
}

export default Message
