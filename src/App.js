import React, { Component } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import Loader from 'components/Loader'
import TabBar from 'components/TabBar'
import Login from 'views/Login'
import Logout from 'views/Logout'
import Register from 'views/Register'
import Index from 'views/Index'
import Logs from 'views/Logs'
import Log from 'views/Log'
import ActiveWorkout from 'views/ActiveWorkout'
import Profile from 'views/Profile'
import * as api from 'api'
import './app.css'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...rest} />
        : <Redirect to='/' />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
  }

  async componentDidMount () {
    this._isMounted = true
    this.removeListener = api.auth.onAuthStateChanged((user) => {
      if (user) {
        this.postLogin()
      } else {
        this.postLogout()
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.saveState(nextProps.location.pathname)
  }

  saveState(path) {
    window.localStorage
      .setItem('sweathard/Path', JSON.stringify(path))
  }

  removeSavedState() {
    window.localStorage.removeItem('sweathard/Path')
  }

  postLogin(user) {
    const initialStateAfterLogin = {
      authed: true,
      loading: false,
    }
    const path =
      JSON.parse(window.localStorage.getItem('sweathard/Path'))
    if (path) {
      console.log('weaveapath')
      this.setState({
        redirect: true,
        path,
        ...initialStateAfterLogin
      })
    } else {
      this.setState(initialStateAfterLogin)
    }
  }

  postLogout() {
    this.setState({
      authed: false,
      loading: false
    })
  }

  componentWillUnmount () {
    this.removeListener()
    this._isMounted = false
  }

  render() {
    if (this.state.path && !this.redirected) {
      this.redirected = true
      return <Redirect to={this.state.path} />
    }
    return this.state.loading === true ? <Loader full={true} /> : (
      <div className="App">
        <Switch>
          <PublicRoute
            path='/login'
            component={Login}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/logout'
            component={Logout}
            authed={this.state.authed}
          />
          <PublicRoute
            path='/register'
            component={Register}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/profile'
            component={Profile}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/workout/random/:effort'
            exact
            random={true}
            component={ActiveWorkout}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/workout/:id'
            exact
            component={ActiveWorkout}
            random={false}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/'
            exact
            component={Index}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/logs/:id'
            component={Log}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/logs'
            component={Logs}
            authed={this.state.authed}
          />

          {/* <Route exact path="/" render={() => (
            this.state.authed ? (
              <Redirect to="/workout"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/> */}

          <Route render={() => (<Redirect to="/"/>)}/>
        </Switch>
        <Switch>
          <Route
            path='/profile'
            component={TabBar}
          />
          <Route
            path='/'
            exact
            component={TabBar}
          />
          <Route
            path='/logs'
            component={TabBar}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
