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
  constructor({computedMatch}) {
    super()
    if (window.localStorage.getItem('sweathard/ActiveWorkout')) {
      this.state = JSON.parse(window.localStorage.getItem('sweathard/ActiveWorkout'))
    } else {
      this.state = {
        type: 'random',
        effort: computedMatch.params.effort,
        loading: true,
        currentExercise: undefined,
        currentRepeats: 0,
        exercises: [],
        done: false,
        startedAt: null,
        paused: false,
        active: false,
        offset: 0,
      }
    }
    console.log('constructorState: ', this.state)
  }

  async componentDidMount() {
    this._isMounted = true
    if (!this.state.active) {
      this.exercises = await api.getAllExercises(api.currentUser().uid)
      if (this.state.type === 'random') {
        await this.prepareRandomWorkout()
        this.start()
      }
    }
  }

  componentWillUnmount(nextProps, nextState) {
    this._isMounted = false
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.active) {
      this.saveState(nextState)
    }
  }

  async prepareRandomWorkout() {
    const lastExercises = await api.getLastExercises(api.currentUser().uid)
    this.exercises = workout.createRandomWorkout(this.exercises, lastExercises)
    this.exercises = workout.setEffort(this.exercises, this.state.effort)
    this.prepareNextExercise(this.exercises)
  }

  saveState(state) {
    window.localStorage.setItem('sweathard/ActiveWorkout', JSON.stringify(state))
  }

  removeSavedState() {
    window.localStorage.removeItem('sweathard/ActiveWorkout')
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
    this.setState(() => {
      return {
        exercises: this.exercises,
        currentExercise: this.nextExercise,
        currentRepeats: this.nextRepeats,
        loading: false,
        startedAt: Date.now(),
        active: true,
      }
    })
  }

  restart = () => {
    if (window.confirm('Restart current workout?')) {
      this.prepareNextExercise(this.exercises)
      this.start()
    }
  }

  cancel = () => {
    this.removeSavedState()
    if (window.confirm('Cancel workout?')) {
      this.setState({
        active: false,
        redirect: true,
        redirectTo: '/workout'
      })
    }
  }

  tick = () => {
    if (this.state.paused) return
    const exercises = workout.doCurrentRepeats(
      this.state.exercises,
      this.state.currentExercise.id,
      this.state.currentRepeats
    )
    this.setState({ exercises })
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

  handleElapsedTime = (elapsed, offset) => {
    this.setState({elapsed, offset})
  }

  async finish() {
    this.setState({loading: true})
    const logId = await api.saveWorkout(api.currentUser().uid, {
      startedAt: this.state.startedAt,
      elapsedTime: this.state.elapsed,
      type: this.state.type,
      effort: this.state.tickeffort,
      exercises: this.state.exercises.map(e => {
        return {
          id: e.id,
          name: e.name,
          repeats: e.repeatsMax
        }
      })
    })
    this.setState({
      active: false,
      redirect: true,
      redirectTo: `/logs/${logId}`
    })
    this.removeSavedState()
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
            onChange={this.handleElapsedTime}
          />
          <Stats exercises={this.state.exercises} />
        </View>
      )
    }
  }
}
