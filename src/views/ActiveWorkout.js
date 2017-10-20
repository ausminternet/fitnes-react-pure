import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import CurrentExercise from 'components/CurrentExercise'
import PauseWorkoutButton from 'components/PauseWorkoutButton'
import CancelWorkoutButton from 'components/CancelWorkoutButton'
import Loader from 'components/Loader'
import Stats from 'components/Stats'
import Timer from 'components/Timer'
import * as workout from 'lib/workout'
import View from 'components/View'
import * as api from 'api'

export default class ActiveWorkout extends Component {
  constructor({id, random, exercises, computedMatch}) {
    super()
    this.exercises = exercises
    this.state = {
      random,
      id,
      effort: computedMatch.params.effort,
      loading: true,
      currentExercise: undefined,
      currentRepeats: 0,
      exercises: [],
      done: false,
      startedAt: null,
      paused: false,
      elapsed: 0,
    }
  }

  async componentDidMount() {
    if (this.state.random) {
      this.prepareRandomWorkout(this.state.effort)
      this.start()
    }
  }

  async prepareRandomWorkout() {
    this.exercises = workout.setEffort(this.exercises, this.state.effort)
    this.prepareNextExercise(this.exercises)
  }

  prepareNextExercise(exercises) {
    this.nextExercise =
      workout.nextExercise(exercises, this.state.currentExercise)
    this.nextRepeats = workout.nextRepeats(this.nextExercise)
  }

  toggleWorkout = () => {
    this.state.paused
      ? this.setState({paused: false})
      : this.setState({paused: true})
  }

  start() {
    this.setState({
      exercises: this.exercises,
      currentExercise: this.nextExercise,
      currentRepeats: this.nextRepeats,
      loading: false,
      startedAt: Date.now()
    })
  }

  restart = () => {
    if (window.confirm('Restart current workout?')) {
      this.prepareNextExercise(this.exercises)
      this.start()
    }
  }

  cancel = () => {
    if (window.confirm('Cancel workout?')) {
      this.setState({
        redirect: true,
        redirectTo: '/workout'
      })
    }
  }

  tick = () => {
    const exercises = workout.doCurrentRepeats(
      this.state.exercises,
      this.state.currentExercise.id,
      this.state.currentRepeats
    )
    this.setState({exercises})
    if (workout.done(exercises)) {
      console.log('finished')
      this.finish()
    } else {
      this.prepareNextExercise(exercises)
      this.setState({
        currentExercise: this.nextExercise,
        currentRepeats: this.nextRepeats
      })
    }
  }

  handleElapsedTime = (elapsed) => {
    this.setState({elapsed})
  }

  async finish() {
    this.setState({
      loading: true,
    })
    await api.saveWorkout(api.currentUser().uid, {
      startedAt: this.state.startedAt,
      elapsedTime: this.state.elapsed,
      exercises: this.state.exercises.map(e => {
        return {
          id: e.id,
          name: e.name,
          repeats: e.repeatsMax
        }
      })
    })
    this.setState({
      redirect: true,
      redirectTo: '/workout'
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirectTo} />
    }

    if (this.state.loading) {
      return (
        <Loader />
      )
    }

    if (this.state.error) {
      return (
        <div>
          <div>Ups...</div>
          <div>{this.state.errorMessage}</div>
        </div>
      )
    }

    if (!this.state.loading) {
      return (
        <View name="ActiveWorkout" withTabBar={false}>
          {/* <TopBar>
            <TopBarLeft> */}
          <CancelWorkoutButton
            onClick={this.cancel}
          />
          {/* </TopBarLeft>
            <TopBarRight> */}
          <PauseWorkoutButton
            onClick={this.toggleWorkout}
            paused={this.state.paused}
          />
          {/* <RestartWorkoutButton onClick={this.restart}/> */}
          {/* </TopBarRight>
          </TopBar> */}
          <CurrentExercise
            name={this.state.currentExercise.name}
            repeats={this.state.currentRepeats}
            paused={this.state.paused}
            onClick={this.tick}
          />
          <Timer
            startTime={this.state.startedAt}
            paused={this.state.paused}
            onChange={this.handleElapsedTime} />
          <Stats exercises={this.state.exercises} />
        </View>
      )
    }
  }
}
