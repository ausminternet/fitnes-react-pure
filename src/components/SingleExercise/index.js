import React from 'react'
import PropTypes from 'prop-types'

import Loader from 'components/Loader'
import PrimaryButton from 'components/PrimaryButton'
import SecondaryButton from 'components/SecondaryButton'

import './styles.css'

const SingleExercise = ({loading, exercise, onEditClick, onDeleteClick}) => {
  if (loading) return <Loader />

  return (
    <div className="single-exercise">
      {/* <div className="single-exercise__repeats-title">
          Repeats:
      </div> */}
      <div className="single-exercise__repeats-container">
        <div className="single-exercise__repeats">
          <div className="single-exercise__repeats-value">
            {exercise.repeatsSetMin}
          </div>
          <div className="single-exercise__repeats-key">
            minimum repeats<br />per set
          </div>
        </div>
        <div className="single-exercise__repeats">
          <div className="single-exercise__repeats-value">
            {exercise.repeatsSetMax}
          </div>
          <div className="single-exercise__repeats-key">
            maximum repeats<br />per set
          </div>
        </div>
        <div className="single-exercise__repeats">
          <div className="single-exercise__repeats-value">
            {exercise.repeatsMax}
          </div>
          <div className="single-exercise__repeats-key">
            maximum repeats<br />per workout
          </div>
        </div>
      </div>
      <div className="single-exercise__buttons">
        <PrimaryButton>
          <button
            className="single-exercise__edit"
            onClick={onEditClick}
          >
        Edit
          </button>
        </PrimaryButton>
        <SecondaryButton>
          <button
            className="single-exercise__delete"
            onClick={onDeleteClick}
          >
        Delete
          </button>
        </SecondaryButton>
      </div>
    </div>
  )
}

SingleExercise.PropTypes = {
  loading: PropTypes.bool.isRequired,
  exercise: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    repeatsMax: PropTypes.number,
    repeatsSetMax: PropTypes.number,
    repeatsSetMin: PropTypes.number,
  }).isRequired,
}

export default SingleExercise
