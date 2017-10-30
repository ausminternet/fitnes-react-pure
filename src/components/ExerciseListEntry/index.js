import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

const ExerciseListEntry = ({exercise}) => {
  const {repeatsMax, repeatsSetMax, repeatsSetMin, id, name} = exercise
  return (
    <Link
      to={`/exercises/${id}`}
      className="exercise-list-entry"
    >
      <span className="exercise-list-entry__name">{name}</span>
      <div className="exercise-list-entry__repeats">
        {repeatsSetMin} / {repeatsSetMax} / {repeatsMax}
      </div>
    </Link>
  )
}

export default ExerciseListEntry
