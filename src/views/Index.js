import React, { Component } from 'react'
import { TopBar, TopBarCenter } from 'components/TopBar'
import Sheet from 'components/Sheet'
import RandomWorkouts from 'components/RandomWorkouts'
import Loader from 'components/Loader'
import ActiveWorkout from 'views/ActiveWorkout'
import View from 'components/View'
import ViewContent from 'components/ViewContent'
import * as api from 'api'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: [],
      loading: true
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const exercises = await api.getAllExercises(api.currentUser().uid)
    if (this._isMounted) {
      this.setState({
        loading: false,
        exercises
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this._isMounted = false
  }

  render() {
    return (
      <View name="Workout">
        <TopBar>
          <TopBarCenter>Your workouts</TopBarCenter>
        </TopBar>
        {this.state.loading &&
          <Loader />
        }
        {!this.state.loading && this.state.exercises.length !== 0 &&
          <ViewContent>
            <RandomWorkouts efforts={[30, 60, 100]}/>
          </ViewContent>
        }
      </View>
    )
  }
}
