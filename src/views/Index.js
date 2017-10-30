import React from 'react'
import RandomWorkoutsContainer from 'container/RandomWorkoutsContainer'
import Layout from 'components/Layout'
import LogoName from 'media/images/logoName.png'

const Index = () => {
  return (
    <Layout
      name="workout"
      title={<img className="logo" src={LogoName} alt="Logo Name"/>}
    >
      <RandomWorkoutsContainer efforts={[30, 60, 100]}/>
    </Layout>
  )
}

export default Index
