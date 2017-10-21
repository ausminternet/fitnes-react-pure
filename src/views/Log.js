import React, {Component} from 'react'

import * as api from 'api'

import {
  TopBar,
  TopBarCenter,
} from 'components/TopBar'
import View from 'components/View'
import Loader from 'components/Loader'
import ViewContent from 'components/ViewContent'

class Log extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      workouts: [],
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const workouts = await api.getLastWorkouts(api.currentUser().uid)
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
          <TopBarCenter>Log</TopBarCenter>
        </TopBar>
        <ViewContent>
          {this.state.loading && <Loader />}
          {!this.state.loading && this.state.workouts.map(w => {
            return (
              <div>
                <div>{w.startedAt}</div>
                <div>{w.elapsedTime}</div>
              </div>
            )
          })}
        </ViewContent>
      </View>
    )
  }
}

export default Log
