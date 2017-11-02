import React from 'react'

import ExerciseListContainer from 'container/ExerciseListContainer'
import Layout from 'components/Layout'
import TopBarLink from 'components/TopBarLink'
import AddIcon from 'media/icons/white/add.png'

const Exercises = () => {
  return (
    <Layout
      title="Exercise"
      name="exercises"
      buttonRight={<TopBarLink icon={{uri: AddIcon}} to={'/exercises/new'}/>}
    >
      <ExerciseListContainer />
    </Layout>
  )
}

export default Exercises
