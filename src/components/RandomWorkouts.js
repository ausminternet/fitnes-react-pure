import React from 'react'
import PropTypes from 'prop-types'
import StartRandomWorkoutButton from 'components/StartRandomWorkoutButton'
import ContentHeader from 'components/ContentHeader'

const RandomWorkouts = ({efforts}) => {
  return (
    <div className="RandomWorkouts">
      <ContentHeader>Random Workouts</ContentHeader>
      <div className="buttons">
        {efforts.map((e, i) => (
          <StartRandomWorkoutButton key={i} effort={e}>
            {e}
          </StartRandomWorkoutButton>
        ))}
      </div>
    </div>
  )
}

RandomWorkouts.PropTypes = {
  efforts: PropTypes.array,
}

export default RandomWorkouts
