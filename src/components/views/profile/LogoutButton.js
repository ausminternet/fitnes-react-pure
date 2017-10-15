import React, {Component} from 'react'
import LogoutIcon from '../../../media/icons/logout.png'
import { logout } from '../../../lib/auth'

export default class LogoutButton extends Component {
  render () {
    return (
      <button
        className="LogoutButton"
        onClick={logout}
      >
        <img src={LogoutIcon} alt="Logout"/>
        <span>Logout</span>
      </button>
    )
  }
}
