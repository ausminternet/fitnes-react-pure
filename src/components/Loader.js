import React from 'react'

const Loader = ({children}) => {
  return (
    <div className="Loader">
      <div className="circle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="text">{children}</p>
    </div>
  )
}

export default Loader
