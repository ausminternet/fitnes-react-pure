import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TopBarLink from 'components/TopBarLink'
import PrimaryButton from 'components/PrimaryButton'
import EditExerciseFormContainer from 'container/EditExerciseFormContainer'
import Layout from 'components/Layout'

const EditExercise = ({computedMatch}) => {
  const id = computedMatch.params.id
  return (
    <Layout
      title="Edit exercise"
      name="edit-exercise"
      buttonLeft={<TopBarLink to={`/exercises/${id}`} text="Cancel"/>}
    >
      <EditExerciseFormContainer id={id} />
      <PrimaryButton>
        <Link to={`/exercises/delete/${id}`} >
          Delete
        </Link>
      </PrimaryButton>
    </Layout>
  )
}

EditExercise.PropTypes = {
  computedMatch: PropTypes.object.isRequired
}

export default EditExercise
