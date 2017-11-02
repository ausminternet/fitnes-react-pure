import React from 'react'

import './styles.css'

const ExerciseListEntry = ({children}) => {
  return (
    <div className="list-entry">
      {children}
    </div>
  )
}

export default ExerciseListEntry
