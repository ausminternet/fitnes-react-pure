import React from 'react'
import PropTypes from 'prop-types'
import StartRandomWorkoutButton from 'components/StartRandomWorkoutButton'
import ContentHeader from 'components/ContentHeader'
import Loader from 'components/Loader'
import Message from 'components/Message'

import './styles.css'

const RandomWorkouts = ({loading, efforts, hasExercises}) => {
  return (
    <div className="random-workouts">
      <ContentHeader>Random Workouts</ContentHeader>
      <div className="random-workouts__buttons">
        {loading && <Loader />}
        {!loading && !hasExercises &&
          <Message>
            No exercises available.
            Go and create your first one!
          </Message>
        }
        {!loading && hasExercises &&
          efforts.map((e, i) => (
            <StartRandomWorkoutButton key={i} effort={e}>
              {e}%
            </StartRandomWorkoutButton>
          ))
        }
      </div>
    </div>
  )
}

RandomWorkouts.PropTypes = {
  efforts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  showNoExercises: PropTypes.bool.isRequired,
}

export default RandomWorkouts
