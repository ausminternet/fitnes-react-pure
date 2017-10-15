import React from 'react'
import { TopBar, TopBarLeft } from '../../common/TopBar'
import TopBarLink from '../../common/TopBarLink'
import Logo from '../../common/Logo'
import RegisterForm from './RegisterForm'
import BackIcon from '../../../media/icons/back.png'

export default function RegisterView() {
  return (
    <div className="RegisterView">
      <TopBar>
        <TopBarLeft>
          <TopBarLink to="/Login" text="Login" icon={BackIcon} />
        </TopBarLeft>
      </TopBar>
      <Logo />
      <RegisterForm />
    </div>
  )
}
