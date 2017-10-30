import React from 'react'
import PropTypes from 'prop-types'

import TopBarLink from 'components/TopBarLink'
import EditExerciseFormContainer from 'container/EditExerciseFormContainer'
import Layout from 'components/Layout'

const EditExercise = ({computedMatch}) => {
  const id = computedMatch.params.id
  return (
    <Layout
      title="Edit exercise"
      name="edit-exercise"
      buttonLeft={<TopBarLink to={'/exercises'} text="Cancel"/>}
    >
      <EditExerciseFormContainer id={id} />
    </Layout>
  )
}

EditExercise.PropTypes = {
  computedMatch: PropTypes.object.isRequired
}

export default EditExercise
