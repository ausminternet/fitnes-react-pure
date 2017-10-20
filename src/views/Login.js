import React, { Component } from 'react'
import { login, resetPassword } from 'api'
import { validateEmail } from 'lib/utils'
import AuthForm from 'components/AuthForm'
import { TopBar, TopBarRight } from 'components/TopBar'
import TopBarLink from 'components/TopBarLink'
import Logo from 'components/Logo'
import View from 'components/View'
import ViewContent from 'components/ViewContent'
import RegisterIcon from 'media/icons/blue/add-user-male.png'

export default class Login extends Component {
  state = {
    errorMessage: '',
    successMessage: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
    })

    try {
      await login(this.state.email, this.state.password)
    } catch (err) {
      this.setState({
        errorMessage: 'Invalid username/password.',
        loading: false
      })
    }
  }

  resetPassword = async (e) => {
    e.preventDefault()
    this.setState({
      loading: true,
    })
    try {
      await resetPassword(this.state.email)
      this.setState({
        successMessage: `Password reset email sent to ${this.state.email}.`
      })
    } catch (err) {
      this.setState({
        errorMessage: 'Email address not found.',
        loading: false
      })
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  readyToSubmit() {
    if (validateEmail(this.state.email) && this.state.password) {
      return true
    }
    return false
  }

  render() {
    return (
      <View>
        <TopBar>
          <TopBarRight>
            <TopBarLink
              to="/register"
              text="Create account"
              icon={RegisterIcon}
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
          />
        </ViewContent>
      </View>
    )
  }
}
