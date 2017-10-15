import React, {Component} from 'react'
import CurrentExercise from './CurrentExercise'
import PauseWorkoutButton from './PauseWorkoutButton'
import CancelWorkoutButton from './CancelWorkoutButton'
import RestartWorkoutButton from './RestartWorkoutButton'
import Loader from '../../common/Loader'
import Stats from './Stats'
import Timer from './Timer'
import { firestore } from '../../../lib/firebase'
import { currentUser } from '../../../lib/auth'
import * as workout from '../../../lib/workout'
import {
  TopBar,
  TopBarLeft,
  TopBarRight
} from '../../common/TopBar'

export default class ActiveWorkout extends Component {
  constructor({effort, random, onClose}) {
    super()
    this.cancel = onClose
    this.state = {
      random,
      effort,
      ready: false,
      currentExercise: undefined,
      currentRepeats: 0,
      exercises: [],
      done: false,
      startetAt: null,
      paused: false
    }
  }

  async componentDidMount() {
    if (this.state.random) {
      await this.prepareRandomWorkout(this.state.effort)
      this.start()
    }
  }

  async getAllExercises() {
    const collection = 'users/' + currentUser().uid + '/exercises'
    const data = await firestore.collection(collection).get()
    let exercises = []
    data.forEach((e) => {
      const d = e.data()
      exercises.push({
        id: e.id,
        name: d.name,
        repeatsMax: d.repeatsMax,
        repeatsSetMax: d.repeatsSetMax,
        repeatsSetMin: d.repeatsSetMin,
      })
    })
    return exercises
  }

  async prepareRandomWorkout() {
    this.exercises = await this.getAllExercises()
    this.exercises = workout.setEffort(this.exercises, this.state.effort)
    this.prepareNextExercise(this.exercises)
  }

  prepareNextExercise(exercises) {
    this.nextExercise =
      workout.nextExercise(exercises, this.state.currentExercise)
    this.nextRepeats = workout.nextRepeats(this.nextExercise)
    console.log('next: ', this.nextExercise)
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
      ready: true,
      startedAt: Date.now()
    })
  }

  restart = () => {
    this.prepareNextExercise(this.exercises)
    this.start()
  }

  tick = () => {
    const exercises = workout.doCurrentRepeats(
      this.state.exercises,
      this.state.currentExercise.id,
      this.state.currentRepeats
    )
    this.setState({
      exercises: exercises
    })
    if (workout.done(exercises)) {
      this.setState({
        finishedAt: Date.now(),
        done: true
      })
    } else {
      this.prepareNextExercise(exercises)
      this.setState({
        currentExercise: this.nextExercise,
        currentRepeats: this.nextRepeats
      })
    }
  }

  render() {
    return (
      <div className="ActiveWorkoutView">
        {!this.state.ready &&
          <Loader />
        }
        <TopBar>
          <TopBarLeft>
            <CancelWorkoutButton onClick={this.cancel} />
          </TopBarLeft>
          <TopBarRight>
            <PauseWorkoutButton
              onClick={this.toggleWorkout}
              paused={this.state.paused}
            />
            <RestartWorkoutButton onClick={this.restart}/>
          </TopBarRight>
        </TopBar>
        {this.state.ready &&
          <CurrentExercise
            name={this.state.currentExercise.name}
            repeats={this.state.currentRepeats}
            paused={this.state.paused}
            onClick={this.tick}
          />
        }
        {this.state.ready &&
          <Timer startTime={this.state.startedAt} paused={this.state.paused}/>
        }
        {this.state.ready &&
          <Stats exercises={this.state.exercises} />
        }
      </div>
    )
  }
}
