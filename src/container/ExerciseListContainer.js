import React, {Component} from 'react'

import * as api from 'api'

import ExerciseList from 'components/ExerciseList'

class ExerciseListContainer extends Component {
  state = {
    loading: true,
    exercises: [],
  }

  componentWillReceiveProps(nextProps) {
    this.setState({showAddForm: nextProps.showAddForm})
  }

  async componentDidMount() {
    this._isMounted = true
    const exercises = await api.getAllExercises(api.currentUser().uid)
    exercises.sort(function(a, b) {
      var textA = a.name.toUpperCase()
      var textB = b.name.toUpperCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })
    if (this._isMounted) {
      this.setState({
        exercises,
        loading: false,
      })
    }
  }

  onExerciseAdd = async (exercise) => {
    this.setState({loading: true})
    const model = {
      name: exercise.name,
      repeatsMax: exercise.repeatsMax,
      repeatsSetMax: exercise.repeatsSetMax,
      repeatsSetMin: exercise.repeatsSetMin
    }
    await api.addExercise(api.currentUser().uid, model)
    this.onExerciseChange(exercise)
    this.setState({loading: false})
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  onExerciseChange = (exercise) => {
    this.setState(prevState => ({
      exercises: prevState.exercises.map(x => {
        return x.id === exercise.id ? exercise : x
      })
    }))
  }

  onExerciseDelete = (exercise) => {
    this.setState(prevState => ({
      exercises: prevState.exercises.filter(e => e.id !== exercise.id)
    }))
  }

  render() {
    return (
      <ExerciseList
        loading={this.state.loading}
        exercises={this.state.exercises}
        onExerciseChange={this.onExerciseChange}
        onExerciseDelete={this.onExerciseDelete}
      />
    )
  }
}

export default ExerciseListContainer
