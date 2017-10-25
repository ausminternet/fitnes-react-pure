import React from 'react'
import StartWorkoutButton from 'components/StartWorkoutButton'
import ContentHeader from 'components/ContentHeader'
import {Link} from 'react-router-dom'

import PrimaryButton from 'components/PrimaryButton'

import './styles.css'

const PlannedWorkouts = () => {
  return (
    <div className="planned-workouts">
      <ContentHeader>Planned Workouts</ContentHeader>
      <div className="planned-workouts__buttons">
        <PrimaryButton>
          <button
            to="/"
            onTouchStart={() => true}
          >
            this is a &lt;button&gt;
          </button>
        </PrimaryButton>
        <PrimaryButton>
          <Link
            to="/"
            onTouchStart={() => true}
          >
            this is a &lt;Link&gt;
          </Link>
        </PrimaryButton>
        <StartWorkoutButton to="/workout/random/">
          upper body
        </StartWorkoutButton>
        <StartWorkoutButton to="/workout/random/">
          legs and lower body
        </StartWorkoutButton>
        <StartWorkoutButton to="/workout/random/">
          my daily workout
        </StartWorkoutButton>
      </div>
    </div>
  )
}

export default PlannedWorkouts
