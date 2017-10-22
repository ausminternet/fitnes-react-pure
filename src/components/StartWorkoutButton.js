import React from 'react'
import {Link} from 'react-router-dom'

export default function StartWorkoutButton ({to, children}) {
  return (
    <Link
      className="StartWorkoutButton"
      to={to}
      onTouchStart={() => true}
    >
      {children}
    </Link>
  )
}
