import React, { Component } from 'react'
import { signUp } from '../../../lib/auth'
import { validateEmail } from '../../../lib/utils'
import AuthForm from '../../common/AuthForm'

export default class RegisterForm extends Component {
  state = {
    errorMessage: null,
    loading: false,
    email: null,
    password: false,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (!this.readyToSubmit()) return
    this.setState({
      loading: true,
    })

    try {
      const user = await signUp(this.state.email, this.state.password)
      user.updateProfile({displayName: this.state.name})
    } catch (err) {
      this.setState({
        errorMessage: err.message,
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
    if (validateEmail(this.state.email) &&
      this.state.password &&
      this.state.name
    ) {
      return true
    }
    return false
  }

  render () {
    return (
      <AuthForm
        errorMessage={this.state.errorMessage}
        onSubmit={this.handleSubmit}
        onInputChange={this.handleInputChange}
        loading={this.state.loading}
        buttonText="Register"
        showPasswordReset={false}
        showName={true}
      />
    )
  }
}
