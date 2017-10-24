import React from 'react'
import PropTypes from 'prop-types'

import TopBarLink from 'components/TopBarLink'
import SingleLogContainer from 'container/SingleLogContainer'
import Layout from 'components/Layout'

import BackIcon from 'media/icons/white/back-filled.png'

const Log = ({computedMatch}) => {
  const logId = computedMatch.params.id
  return (
    <Layout
      title="Log"
      name="log"
      buttonLeft={<TopBarLink icon={{uri: BackIcon}} to={'/logs'} text="Back"/>}
    >
      <SingleLogContainer id={logId} />
    </Layout>
  )
}

Log.PropTypes = {
  computedMatch: PropTypes.object.isRequired
}

export default Log
