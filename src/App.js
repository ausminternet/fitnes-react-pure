import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Loader from 'components/Loader'
import TabBar from 'components/TabBar'
import Login from 'views/Login'
import Logout from 'views/Logout'
import Register from 'views/Register'
import Index from 'views/Index'
import Log from 'views/Log'
import ActiveWorkout from 'views/ActiveWorkout'
import Profile from 'views/Profile'
import * as api from 'api'

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

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }

  async componentDidMount () {
    this._isMounted = true
    this.removeListener = api.auth.onAuthStateChanged((user) => {
      if (user) {
        this.postLogin(user)
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  async postLogin(user) {
    // const exercises = await api.getAllExercises(api.currentUser().uid)
    // const lastWorkouts = await api.getLastWorkouts(api.currentUser().uid)
    if (this._isMounted) {
      this.setState({
        authed: true,
        loading: false,
        // exercises,
        // lastWorkouts
      })
    }
  }

  componentWillUnmount () {
    this.removeListener()
    this._isMounted = false
  }

  render() {
    return this.state.loading === true ? <Loader /> : (
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
            path='/log'
            component={Log}
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
            path='/log'
            exact
            component={TabBar}
          />
        </Switch>
      </div>
    )
  }
}
