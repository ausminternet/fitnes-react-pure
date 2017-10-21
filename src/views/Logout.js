import React, {Component} from 'react'
import {logout} from 'api'
import Loader from 'components/Loader'

class Logout extends Component {
  componentDidMount() {
    logout()
  }

  render () {
    return <Loader />
  }
}

export default Logout
