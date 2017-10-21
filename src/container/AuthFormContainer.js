import React, {Component} from 'react'

import { validateEmail } from 'lib/utils'

import AuthForm from 'components/AuthForm'

class AuthFormContainer extends Component {
  constructor({
    loading,
    withName,
    onSubmit,
    successMessage,
    errorMessage,
    ...rest
  }) {
    super(...rest)
    this.onSubmitHandler = onSubmit
    this.state = {
      successMessage,
      errorMessage,
      loading,
      withName
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (!this.readyToSubmit()) return
    this.setState({loading: true})
    this.onSubmitHandler()
  }

  handleInputChange = (e) => {
    this[e.target.name] = e.target.value
  }

  readyToSubmit() {
    return validateEmail(this.email) && this.password && this.name
  }

  render() {
    return (
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
    )
  }
}

export default AuthFormContainer
