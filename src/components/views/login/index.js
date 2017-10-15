import React from 'react'
import { TopBar, TopBarRight } from '../../common/TopBar'
import TopBarLink from '../../common/TopBarLink'
import Logo from '../../common/Logo'
import LoginForm from './LoginForm'
import RegisterIcon from '../../../media/icons/register.png'

export default function LoginView() {
  return (
    <div className="LoginView">
      <TopBar>
        <TopBarRight>
          <TopBarLink to="/register" text="Create account" icon={RegisterIcon} />
        </TopBarRight>
      </TopBar>
      <Logo />
      <LoginForm />
    </div>
  )
}
