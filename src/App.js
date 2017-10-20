import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Loader from 'components/Loader'
import TabBar from 'components/TabBar'
import Login from 'views/Login'
import Register from 'views/Register'
import Workout from 'views/Workout'
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
        : <Redirect to='/workout' />}
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
    const exercises = await api.getAllExercises(api.currentUser().uid)
    if (this._isMounted) {
      this.setState({
        authed: true,
        loading: false,
        exercises
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
          <PublicRoute
            path='/register'
            component={Register}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/profile'
            exact
            component={Profile}
            authed={this.state.authed}
          />
          <PrivateRoute
            path='/workout/random/:effort'
            exact
            component={ActiveWorkout}
            random={true}
            authed={this.state.authed}
            exercises={this.state.exercises}
          />
          <PrivateRoute
            path='/workout/:id'
            exact
            component={Workout}
            random={true}
            authed={this.state.authed}
            exercises={this.state.exercises}
          />
          <PrivateRoute
            path='/workout'
            exact
            component={Workout}
            authed={this.state.authed}
            exercises={this.state.exercises}
          />
          {/* <PrivateRoute
            path='/workout'
            exact
            component={Workout}
            authed={this.state.authed}
            exercises={this.state.exercises}
          /> */}

          <Route exact path="/" render={() => (
            this.state.authed ? (
              <Redirect to="/workout"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>

          <Route render={() => (<Redirect to="/"/>)}/>
        </Switch>
        {this.state.authed &&
          <Switch>
            <Route
              path='/profile'
              exact
              component={TabBar}
            />
            <Route
              path='/workout'
              exact
              component={TabBar}
            />
          </Switch>
        }
      </div>
    )
  }
}
