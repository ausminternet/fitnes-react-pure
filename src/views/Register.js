import React, {Component} from 'react'

import { signUp } from 'api'
import { validateEmail } from 'lib/utils'

import { TopBar, TopBarLeft } from 'components/TopBar'
import ViewContent from 'components/ViewContent'
import TopBarLink from 'components/TopBarLink'
import AuthForm from 'components/AuthForm'
import Logo from 'components/Logo'
import View from 'components/View'

import BackIcon from 'media/icons/white/back-filled.png'

export default class Register extends Component {
  state = {
    errorMessage: '',
    successMessage: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (!this.readyToSubmit()) return
    this.setState({loading: true})

    try {
      const user = await signUp(this.email, this.password)
      user.updateProfile({displayName: this.name})
    } catch (err) {
      this.setState({
        errorMessage: err.message,
        loading: false
      })
    }
  }

  handleInputChange = (e) => {
    this[e.target.name] = e.target.value
  }

  readyToSubmit() {
    return validateEmail(this.email) && this.password && this.name
  }

  render() {
    return (
      <View name="Register">
        <TopBar>
          <TopBarLeft>
            <TopBarLink to="/Login" text="Login" icon={{uri: BackIcon}} />
          </TopBarLeft>
        </TopBar>
        <ViewContent>
          <Logo />
          <AuthForm
            errorMessage={this.state.errorMessage}
            onSubmit={this.handleSubmit}
            onInputChange={this.handleInputChange}
            loading={this.state.loading}
            buttonText="Register"
            buttonLoadingText="Setting up account ..."
            showPasswordReset={false}
            showName={true}
          />
        </ViewContent>
      </View>
    )
  }
}
