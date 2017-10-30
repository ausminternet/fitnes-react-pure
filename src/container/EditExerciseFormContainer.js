import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import * as api from 'api'

import Loader from 'components/Loader'
import ExerciseFormContainer from 'container/ExerciseFormContainer'

class EditExcersiceFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      loading: true,
      id: props.id
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const exercise =
      await api.getExercise(api.currentUser().uid, this.state.id)
    if (this._isMounted) {
      console.log(exercise)
      this.setState({
        loading: false,
        exercise
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async getAllExercises() {
    return api.getAllExercises(api.currentUser().uid)
  }

  onSubmitHandler = async (exercise) => {
    this.setState({loading: true})
    await api.updateExercise(
      api.currentUser().uid,
      this.state.exercise.id,
      exercise
    )
    this.setState({
      redirect: true,
      redirectTo: `/exercises/${this.state.exercise.id}`
    })
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirectTo} />

    if (this.state.loading) return <Loader />

    return (
      <ExerciseFormContainer
        onSubmit={this.onSubmitHandler}
        name={this.state.exercise.name}
        exercise={this.state.exercise}
      />
    )
  }
}

export default EditExcersiceFormContainer
