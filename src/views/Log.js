import React, {Component} from 'react'

import * as api from 'api'

import {
  TopBar,
  TopBarLeft,
  TopBarCenter,
} from 'components/TopBar'
import View from 'components/View'
import Loader from 'components/Loader'
import ViewContent from 'components/ViewContent'
import TopBarLink from 'components/TopBarLink'

import BackIcon from 'media/icons/white/back-filled.png'

class Log extends Component {
  constructor(props) {
    super(props)
    this.id = props.computedMatch.params.id
    this.state = {
      loading: true,
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const workout = await api.getLog(api.currentUser().uid, this.id)
    if (this._isMounted) {
      this.setState({
        workout,
        loading: false,
      })
    }
  }

  componentDidUnmount(nextProps, nextState) {
    this._isMounted = false
  }

  render() {
    const w = this.state.workout
    return (
      <View >
        <TopBar>
          <TopBarLeft>
            <TopBarLink icon={{uri: BackIcon}} to={'/logs'} text="Back"/>
          </TopBarLeft>
          <TopBarCenter>Log</TopBarCenter>
        </TopBar>
        <ViewContent>
          {this.state.loading && <Loader />}
          {!this.state.loading && this.state.workout &&
              <div>
                <div>id: {w.id}</div>
                <div>type: {w.type}</div>
                <div>effort: {w.effort}</div>
                <div>startedAt: {new Date(w.startedAt).toISOString()}</div>
                <div>
                  elapsedTime:
                  {new Date(w.elapsedTime).toISOString().substr(11, 8)}
                </div>
                <div>exercises:
                  <ul>
                    {w.exercises.map((e, i) => {
                      return (
                        <li key={i}>
                          <div>name: {e.name}</div>
                          <div>repeats: {e.repeats}</div>
                        </li>
                      )
                    })
                    }
                  </ul>
                </div>

              </div>
          }
        </ViewContent>
      </View>
    )
  }
}

export default Log
