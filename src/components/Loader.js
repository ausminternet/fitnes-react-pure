import React from 'react'

const Loader = ({children}) => {
  return (
    <div className="Loader">
      <a-loader>
        <span></span>
        <span></span>
        <span></span>
      </a-loader>
      <p className="text">{children}</p>
    </div>
  )
}

export default Loader
