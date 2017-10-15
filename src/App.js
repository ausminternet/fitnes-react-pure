import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Loader from './components/common/Loader'
import Login from './components/views/login'
import Register from './components/views/register'
import Index from './components/views/index'
import Profile from './components/views/profile'
import { auth } from './lib/firebase'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount () {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <Loader /> : (
      <BrowserRouter>
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
            path='/'
            exact
            component={Index}
            authed={this.state.authed}
          />
          <Route component={Index} />
        </Switch>
      </BrowserRouter>
    )
  }
}
