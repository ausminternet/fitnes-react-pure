import React from 'react'

import LogListContainer from 'container/LogListContainer'
import Layout from 'components/Layout'

const Logs = () => {
  return (
    <Layout title="Logs" name="logs">
      <LogListContainer />
    </Layout>
  )
}

export default Logs
