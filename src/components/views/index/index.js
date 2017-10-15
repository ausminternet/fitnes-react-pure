import React, { Component } from 'react'
import { TopBar, TopBarCenter, TopBarRight } from '../../common/TopBar'
import TopBarLink from '../../common/TopBarLink'
import Sheet from '../../common/Sheet'
import ProfileIcon from '../../../media/icons/user.png'
import RandomWorkout from './RandomWorkout'
import ActiveWorkout from './ActiveWorkout'

export default class IndexView extends Component {
  state = {
    showWorkout: false,
    random: false,
    effort: null
  }

  handleEffortChoose = (effort) => {
    this.setState({
      random: true,
      showWorkout: true,
      effort
    })
  }

  // handleOnCancel = () => {
  //   this.setState({
  //     showWorkout: false,
  //     random: false,
  //     effort: null
  //   })
  // }

  render() {
    return (
      <div className="IndexView">
        <TopBar>
          <TopBarCenter>Choose workout</TopBarCenter>
          <TopBarRight>
            <TopBarLink to="/Profile" icon={ProfileIcon} />
          </TopBarRight>
        </TopBar>
        <RandomWorkout
          onEffortChoose={(effort) => this.handleEffortChoose(effort)}
        />
        <Sheet
          show={this.state.showWorkout}
          component={ActiveWorkout}
          random={this.state.random}
          effort={this.state.effort}
        />

      </div>
    )
  }
}
