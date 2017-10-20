import React, { Component } from 'react'
import { TopBar, TopBarCenter } from 'components/TopBar'
import Sheet from 'components/Sheet'
import RandomWorkouts from 'components/RandomWorkouts'
import ActiveWorkout from 'views/ActiveWorkout'
import View from 'components/View'
import ViewContent from 'components/ViewContent'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.cancelHandler = props.onClose
    this.effort = this.props.computedMatch.params.effort
    this.random = this.props.random
    this.state = {
      exercises: props.exercises,
    }
  }

  componentDidMount() {
    if (this.random && this.effort) {
      this.checkReadyState()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.random = nextProps.random
    this.effort = nextProps.computedMatch.params.effort
    this.checkReadyState()
  }

  checkReadyState() {
    if (this.random && this.effort) {
      this.setState({
        random: this.random,
        showWorkout: true,
        effort: this.effort,
        workoutReady: true
      })
    } else {
      this.setState({
        showWorkout: false,
        workoutReady: false
      })
    }
  }

  render() {
    return (
      <View name="Workout">
        <TopBar>
          <TopBarCenter>Your workouts</TopBarCenter>
        </TopBar>
        {this.state.exercises.length !== 0 &&
          <ViewContent>
            <RandomWorkouts efforts={[30, 60, 100]}/>
          </ViewContent>
        }
        <Sheet
          show={this.state.workoutReady}
          component={ActiveWorkout}
          random={this.state.random}
          id={this.state.id}
          effort={this.state.effort}
          exercises={this.state.exercises}
          redirectTo="/workout"
        />
      </View>
    )
  }
}
