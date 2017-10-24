import React from 'react'
import {Link} from 'react-router-dom'

import PrimaryButton from 'components/PrimaryButton'
import './styles.css'

const StartWorkoutButton = ({to, children, className}) => {
  className = [
    'start-workout-button',
    className
  ].join(' ')

  return (
    <PrimaryButton>
      <Link
        className={className}
        to={to}
        onTouchStart={() => true}
      >
        {children}
      </Link>
    </PrimaryButton>
  )
}

export default StartWorkoutButton
