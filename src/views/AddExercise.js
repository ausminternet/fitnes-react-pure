import React from 'react'
import PropTypes from 'prop-types'

import TopBarLink from 'components/TopBarLink'
import AddExerciseFormContainer from 'container/AddExerciseFormContainer'
import Layout from 'components/Layout'

const AddExercise = () => {
  return (
    <Layout
      title="Add exercise"
      name="add-exercise"
      buttonLeft={<TopBarLink to={'/exercises'} text="Cancel"/>}
    >
      <AddExerciseFormContainer />
    </Layout>
  )
}

AddExercise.PropTypes = {
  computedMatch: PropTypes.object.isRequired
}

export default AddExercise
