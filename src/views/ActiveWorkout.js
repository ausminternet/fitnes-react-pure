import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import * as workout from 'lib/workout'
import * as api from 'api'

import TimerContainer from 'container/TimerContainer'

import CancelWorkoutButton from 'components/CancelWorkoutButton'
import PauseWorkoutButton from 'components/PauseWorkoutButton'
import CurrentExercise from 'components/CurrentExercise'
import Loader from 'components/Loader'
import Stats from 'components/Stats'
import View from 'components/View'

export default class ActiveWorkout extends Component {
  constructor({computedMatch, random, id}) {
    super()
    this.effort = computedMatch.params.effort
    this.random = random
    this.id = id
    this.state = {
      loading: true,
      currentExercise: undefined,
      currentRepeats: 0,
      exercises: [],
      done: false,
      startedAt: null,
      paused: false,
    }
  }

  async componentDidMount() {
    this._isMounted = true
    this.exercises = await api.getAllExercises(api.currentUser().uid)
    if (this.random) {
      this.prepareRandomWorkout(this.effort)
      this.start()
    }
  }

  componentWillUnmount(nextProps, nextState) {
    this._isMounted = false
  }

  async prepareRandomWorkout() {
    this.exercises = workout.setEffort(this.exercises, this.effort)
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
    this.elapsed = elapsed
  }

  async finish() {
    this.setState({loading: true})
    await api.saveWorkout(api.currentUser().uid, {
      startedAt: this.state.startedAt,
      elapsedTime: 0,
      // elapsedTime: this.elapsed,
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
          <CancelWorkoutButton
            onClick={this.cancel}
          />
          <PauseWorkoutButton
            onClick={this.toggleWorkout}
            paused={this.state.paused}
          />
          <CurrentExercise
            name={this.state.currentExercise.name}
            repeats={this.state.currentRepeats}
            paused={this.state.paused}
            onClick={this.tick}
          />
          <TimerContainer
            startTime={this.state.startedAt}
            paused={this.state.paused}
          />
          <Stats exercises={this.state.exercises} />
        </View>
      )
    }
  }
}
