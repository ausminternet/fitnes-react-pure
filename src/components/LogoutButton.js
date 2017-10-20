import React, {Component} from 'react'
import { logout } from 'api'
import TopBarButton from 'components/TopBarButton'

export default class LogoutButton extends Component {
  render () {
    return (
      <TopBarButton text="Logout" onClick={logout} />
    )
  }
}
