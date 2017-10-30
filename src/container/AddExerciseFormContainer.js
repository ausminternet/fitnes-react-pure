import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import * as api from 'api'

import Loader from 'components/Loader'
import ExerciseFormContainer from 'container/ExerciseFormContainer'

class AddExcersiceFormContainer extends Component {
  state = {
    redirect: false,
    loading: false
  }

  onSubmitHandler = async (exercise) => {
    this.setState({loading: true})
    const exerciseId = await api.addExercise(api.currentUser().uid, exercise)
    this.setState({
      redirect: true,
      redirectTo: `/exercises/${exerciseId}`
    })
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirectTo} />

    if (this.state.loading) return <Loader />

    return (
      <ExerciseFormContainer onSubmit={this.onSubmitHandler}/>
    )
  }
}

export default AddExcersiceFormContainer
