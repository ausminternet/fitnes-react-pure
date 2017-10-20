import React, {Component} from 'react'
import { signUp } from 'api'
import { validateEmail } from 'lib/utils'
import AuthForm from 'components/AuthForm'
import { TopBar, TopBarLeft } from 'components/TopBar'
import TopBarLink from 'components/TopBarLink'
import Logo from 'components/Logo'
import View from 'components/View'
import ViewContent from 'components/ViewContent'
import BackIcon from 'media/icons/blue/back-filled.png'

export default class Register extends Component {
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

  render() {
    return (
      <View>
        <TopBar>
          <TopBarLeft>
            <TopBarLink to="/Login" text="Login" icon={BackIcon} />
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
            showPasswordReset={false}
            showName={true}
          />
        </ViewContent>
      </View>
    )
  }
}
