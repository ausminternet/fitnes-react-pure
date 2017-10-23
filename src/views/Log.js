import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import * as api from 'api'

import {
  TopBar,
  TopBarLeft,
  TopBarCenter,
} from 'components/TopBar'
import SwipeView from 'components/SwipeView'
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

  componentWillUnmount(nextProps, nextState) {
    this._isMounted = false
  }

  handleSwipe = () => {
    this.setState({
      redirect: true,
      to: '/logs'
    })
  }

  render() {
    const w = this.state.workout

    return this.state.redirect ? <Redirect to={this.state.to} /> : (
      <SwipeView onSwipe={this.handleSwipe}>
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
      </SwipeView>
    )
  }
}

export default Log
