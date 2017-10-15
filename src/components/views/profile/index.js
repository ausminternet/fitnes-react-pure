import React from 'react'
import {
  TopBar,
  TopBarLeft,
  TopBarCenter,
  TopBarRight
} from '../../common/TopBar'
import TopBarLink from '../../common/TopBarLink'
import BackIcon from '../../../media/icons/back.png'
import LogoutButton from './LogoutButton'

export default function Profile() {
  return (
    <div className="LoginView">
      <TopBar>
        <TopBarLeft>
          <TopBarLink to="/" text="Back" icon={BackIcon} />
        </TopBarLeft>
        <TopBarCenter>Profile</TopBarCenter>
        <TopBarRight>
          <LogoutButton />
        </TopBarRight>
      </TopBar>
    </div>
  )
}
