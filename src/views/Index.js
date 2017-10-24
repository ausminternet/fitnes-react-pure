import React from 'react'
import RandomWorkoutsContainer from 'container/RandomWorkoutsContainer'
import Layout from 'components/Layout'

const Index = () => {
  return (
    <Layout name="workout" title="Your workouts">
      <RandomWorkoutsContainer efforts={[30, 60, 100]}/>
    </Layout>
  )
}

export default Index
