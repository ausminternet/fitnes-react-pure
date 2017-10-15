import React, { Component } from 'react'
import { login, resetPassword } from '../../../lib/auth'
import { validateEmail } from '../../../lib/utils'
import AuthForm from '../../common/AuthForm'

export default class LoginForm extends Component {
  state = {
    successMessage: null,
    errorMessage: null,
    loading: false,
    email: null,
    password: false
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
    try {
      resetPassword(this.state.email)
      this.setState({
        successMessage: `Password reset email sent to ${this.state.email}.`
      })
    } catch (err) {
      this.setState({
        errorMessage: 'Email address not found.'
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

  render () {
    return (
      <AuthForm
        errorMessage={this.state.errorMessage}
        successMessage={this.state.successMessage}
        onSubmit={this.handleSubmit}
        onInputChange={this.handleInputChange}
        onPasswordReset={this.resetPassword}
        loading={this.state.loading}
        buttonText="Login"
      />
    )
  }
}
