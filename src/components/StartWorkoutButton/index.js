import React from 'react'
import {Link} from 'react-router-dom'

import PrimaryButton from 'components/PrimaryButton'
import './styles.css'

export default function StartWorkoutButton ({to, children}) {
  return (
    <PrimaryButton>
      <Link
        className="start-workout-button"
        to={to}
        onTouchStart={() => true}
      >
        {children}
      </Link>
    </PrimaryButton>
  )
}
