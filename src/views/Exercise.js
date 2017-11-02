import React from 'react'
import PropTypes from 'prop-types'

import TopBarLink from 'components/TopBarLink'
import SingleExerciseContainer from 'container/SingleExerciseContainer'
import Layout from 'components/Layout'

import BackIcon from 'media/icons/white/back-filled.png'

const Exercise = ({computedMatch}) => {
  const id = computedMatch.params.id
  return (
    <Layout
      title="Exercise"
      name="exercise"
      buttonLeft={
        <TopBarLink icon={{uri: BackIcon}} to={'/exercises'} text="All"/>
      }
      buttonRight={<TopBarLink to={`/exercises/edit/${id}`} text="Edit"/>}
    >
      <SingleExerciseContainer id={id} />
    </Layout>
  )
}

Exercise.PropTypes = {
  computedMatch: PropTypes.object.isRequired
}

export default Exercise
