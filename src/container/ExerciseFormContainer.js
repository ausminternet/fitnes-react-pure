import React, {Component} from 'react'

import * as api from 'api'

import Loader from 'components/Loader'
import ExerciseForm from 'components/ExerciseForm'

class ExcersiceFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formIsValid: false,
      loading: true,
      isEdit: !!props.exercise,
      name: props.exercise.name,
      repeatsMax: props.exercise.repeatsMax,
      repeatsSetMax: props.exercise.repeatsSetMax,
      repeatsSetMin: props.exercise.repeatsSetMin
    }
    this.onSubmitHandler = props.onSubmit
  }

  async componentDidMount() {
    this._isMounted = true
    this.exercises = await this.getAllExercises()
    this.exercisesNames = this.exercises.map(e => e.name)
    if (this._isMounted) { this.setState({loading: false}) }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async getAllExercises() {
    return api.getAllExercises(api.currentUser().uid)
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      setTimeout(() => this.checkValues(), 200)
    })
  }

  checkValues = async () => {
    if (this.state.name && this.exercisesNames.includes(this.state.name)) {
      this.setState({errorMessage: 'name already taken'})
      return
    }

    if ((this.state.repeatsSetMax && this.state.repeatsMax) &&
      (+this.state.repeatsSetMin > +this.state.repeatsSetMax)) {
      this.setState({errorMessage:
        'min repeats per set have to be less or equal than max repeats per set'
      })
      return
    }

    if ((this.state.repeatsSetMax && this.state.repeatsMax) &&
      (+this.state.repeatsSetMax > +this.state.repeatsMax)) {
      this.setState({errorMessage:
        'max repeats per set have to be less or equalthan max repeats per workout'
      })
      return
    }

    this.setState({errorMessage: ''})

    if (this.state.name &&
      this.state.repeatsMax &&
      this.state.repeatsSetMax &&
      this.state.repeatsSetMin) {
      this.enableSubmit()
    }
  }

  enableSubmit = () => {
    this.setState({formIsValid: true})
  }

  disableSubmit = () => {
    this.setState({formIsValid: false})
  }

  onFormSubmit = async (e) => {
    e.preventDefault()
    const model = {
      name: this.state.name,
      repeatsMax: this.state.repeatsMax,
      repeatsSetMax: this.state.repeatsSetMax,
      repeatsSetMin: this.state.repeatsSetMin
    }
    this.onSubmitHandler(model)
  }

  render() {
    if (this.state.loading) return <Loader />

    return (
      <ExerciseForm
        isValid={this.state.formIsValid}
        errorMessage={this.state.errorMessage}
        onSubmit={this.onFormSubmit}
        onChange={this.handleInputChange}
        name={this.state.name}
        repeatsMax={this.state.repeatsMax}
        repeatsSetMax={this.state.repeatsSetMax}
        repeatsSetMin={this.state.repeatsSetMin}
      />
    )
  }
}

export default ExcersiceFormContainer
