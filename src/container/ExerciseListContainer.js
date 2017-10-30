import React, {Component} from 'react'

import * as api from 'api'

import ExerciseList from 'components/ExerciseList'

class ExerciseListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      exercises: [],
    }
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

  render() {
    return (
      <ExerciseList
        loading={this.state.loading}
        exercises={this.state.exercises}
      />
    )
  }
}

export default ExerciseListContainer
