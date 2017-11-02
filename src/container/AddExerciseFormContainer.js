import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import * as api from 'api'

import Loader from 'components/Loader'
import ExerciseFormContainer from 'container/ExerciseFormContainer'

class AddExcersiceFormContainer extends Component {
  state = {
    redirect: false,
    loading: true
  }

  async componentDidMount() {
    this._isMounted = true
    const exercises = await api.getAllExercises(api.currentUser().uid)
    if (this._isMounted) {
      this.setState({
        exercises,
        loading: false,
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  onSubmitHandler = async (exercise) => {
    this.setState({loading: true})
    const model = {
      name: exercise.name,
      repeatsMax: exercise.repeatsMax,
      repeatsSetMax: exercise.repeatsSetMax,
      repeatsSetMin: exercise.repeatsSetMin
    }
    await api.addExercise(api.currentUser().uid, model)
    this.setState({
      redirect: true,
      redirectTo: `/exercises/`
    })
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirectTo} />

    if (this.state.loading) return <Loader />

    return (
      <ExerciseFormContainer exercises={this.state.exercises} onSubmit={this.onSubmitHandler}/>
    )
  }
}

export default AddExcersiceFormContainer
