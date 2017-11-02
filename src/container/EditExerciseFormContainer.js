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
      loading: false,
      id: props.id,
      delayedLoader: true
    }
  }

  onSubmitHandler = async (exercise) => {
    this.setState({loading: true, delayedLoader: false})
    await api.updateExercise(
      api.currentUser().uid,
      this.state.id,
      exercise
    )
    this.setState({
      redirect: true,
      redirectTo: `/exercises/${this.state.id}`
    })
  }

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirectTo} />

    if (this.state.loading) return <Loader delayed={this.state.delayedLoader}/>

    return (
      <ExerciseFormContainer
        onSubmit={this.onSubmitHandler}
        exerciseId={this.state.id}
        isEdit={true}
      />
    )
  }
}

export default EditExcersiceFormContainer
