import React from 'react'
import {
  TopBar,
  TopBarCenter,
  TopBarRight
} from 'components/TopBar'
import View from 'components/View'
import ViewContent from 'components/ViewContent'
import LogoutButton from 'components/LogoutButton'

export default function Profile() {
  return (
    <View>
      <TopBar>
        <TopBarCenter>Profile</TopBarCenter>
        <TopBarRight>
          <LogoutButton />
        </TopBarRight>
      </TopBar>
      <ViewContent></ViewContent>
    </View>
  )
}
