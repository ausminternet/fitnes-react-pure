import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import * as api from 'api'

import {
  TopBar,
  TopBarCenter,
} from 'components/TopBar'
import View from 'components/View'
import Loader from 'components/Loader'
import ViewContent from 'components/ViewContent'

class Logs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      workouts: [],
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const workouts = await api.getLogs(api.currentUser().uid)
    this.setState({
      workouts,
      loading: false,
    })
  }

  componentWillUnmount(nextProps, nextState) {
    this._isMounted = false
  }

  render() {
    return (
      <View>
        <TopBar>
          <TopBarCenter>Logs</TopBarCenter>
        </TopBar>
        <ViewContent>
          {this.state.loading && <Loader />}
          {!this.state.loading && this.state.workouts.map((w, i) => {
            return (
              <div key={i}>
                <Link to={`/logs/${w.id}`}>
                  <div>ID: {w.id}</div>
                  <div>StartedAt: {new Date(w.startedAt).toISOString()}</div>
                  <div>ElapsedTime: {w.elapsedTime}</div>
                </Link>
              </div>
            )
          })}
        </ViewContent>
      </View>
    )
  }
}

export default Logs
