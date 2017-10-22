import React, { Component } from 'react'

import { login, resetPassword } from 'api'
import { validateEmail } from 'lib/utils'

import { TopBar, TopBarRight } from 'components/TopBar'
import ViewContent from 'components/ViewContent'
import TopBarLink from 'components/TopBarLink'
import AuthForm from 'components/AuthForm'
import View from 'components/View'
import Logo from 'components/Logo'

import RegisterIcon from 'media/icons/white/register.png'

export default class Login extends Component {
  state = {
    errorMessage: '',
    successMessage: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (!this.readyToSubmit()) return
    this.setState({loading: true})

    try {
      await login(this.email, this.password)
    } catch (err) {
      this.setState({
        errorMessage: 'Invalid username/password.',
        loading: false
      })
    }
  }

  resetPassword = async (e) => {
    e.preventDefault()
    this.setState({loading: true})
    try {
      await resetPassword(this.email)
      this.setState({
        successMessage: `Password reset email sent to ${this.email}.`
      })
    } catch (err) {
      this.setState({
        errorMessage: 'Email address not found.',
        loading: false
      })
    }
  }

  handleInputChange = (e) => {
    this[e.target.name] = e.target.value
  }

  readyToSubmit() {
    return validateEmail(this.email) && this.password
  }

  render() {
    return (
      <View name="Login">
        <TopBar>
          <TopBarRight>
            <TopBarLink
              to="/register"
              text="Create account"
              icon={{uri: RegisterIcon}}
            />
          </TopBarRight>
        </TopBar>
        <ViewContent>
          <Logo />
          <AuthForm
            errorMessage={this.state.errorMessage}
            successMessage={this.state.successMessage}
            onSubmit={this.handleSubmit}
            onInputChange={this.handleInputChange}
            onPasswordReset={this.resetPassword}
            loading={this.state.loading}
            buttonText="Login"
            buttonLoadingText="Loggin you in ..."
          />
        </ViewContent>
      </View>
    )
  }
}
