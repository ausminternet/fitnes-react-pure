import React from 'react'
import PropTypes from 'prop-types'

import {TopBar, TopBarLeft, TopBarCenter, TopBarRight} from 'components/TopBar'
import View from 'components/View'
import ViewContent from 'components/ViewContent'

const Layout = ({
  title,
  name,
  buttonLeft,
  buttonRight,
  children
}) => {
  return (
    <View>
      <TopBar>
        <TopBarLeft>
          {buttonLeft}
        </TopBarLeft>
        <TopBarCenter>{title}</TopBarCenter>
        <TopBarRight>
          {buttonRight}
        </TopBarRight>
      </TopBar>
      <ViewContent>
        {children}
      </ViewContent>
    </View>
  )
}

Layout.PropTypes = {
  title: PropTypes.node.isRequired,
  name: PropTypes.string,
  buttonLeft: PropTypes.node,
  buttonRight: PropTypes.node,
  children: PropTypes.node,
}

export default Layout
