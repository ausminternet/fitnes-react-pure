import React from 'react'

import './styles.css'

const ExerciseListEntry = ({children}) => {
  return (
    <div className="list-entry">
      <div className="list-entry__arrow"></div>
      {children}
    </div>
  )
}

export default ExerciseListEntry
