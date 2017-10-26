import React from 'react'
import StartWorkoutButton from 'components/StartWorkoutButton'
import ContentHeader from 'components/ContentHeader'
import {Link} from 'react-router-dom'

import PrimaryButton from 'components/PrimaryButton'

import './styles.css'

const PlannedWorkouts = () => {
  return (
    <section className="planned-workouts">
      <ContentHeader>Planned Workouts</ContentHeader>
      <div className="planned-workouts__buttons">
        <StartWorkoutButton to="/workout/random/">
          arms and upper body
        </StartWorkoutButton>
        <StartWorkoutButton to="/workout/random/">
          legs and lower body
        </StartWorkoutButton>
        <StartWorkoutButton to="/workout/random/">
          my daily workout
        </StartWorkoutButton>
      </div>
    </section>
  )
}

export default PlannedWorkouts
