import React, {Component} from 'react'

import * as api from 'api'

import ExerciseForm from 'components/ExerciseForm'

const ERROR_NAME = 'This name is already taken, please choose another.'
const ERROR_MIN = 'Minimum repeats per set have to be less or equal than maximum repeats per set.'
const ERROR_MAX = 'max repeats per set have to be less or equalthan max repeats per workout'

class ExcerciseFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formIsValid: false,
      saving: this.props.saving,
      name: '',
      repeatsMax: '',
      repeatsSetMax: '',
      repeatsSetMin: ''
    }
    this.exercise = props.exercise
    this.exercises = props.exercises
    this.isEdit = props.isEdit
    this.onSubmitHandler = props.onSubmit
  }

  componentDidMount() {
    this._isMounted = true
    this.exercisesNames = this.exercises.map(e => e.name)
    if (!this._isMounted) return
    if (this.isEdit) {
      this.origName = this.exercise.name
      this.setState({
        id: this.exercise.id,
        name: this.exercise.name,
        repeatsMax: this.exercise.repeatsMax,
        repeatsSetMax: this.exercise.repeatsSetMax,
        repeatsSetMin: this.exercise.repeatsSetMin
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({saving: nextProps.saving})
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  async getAllExercises() {
    return api.getAllExercises(api.currentUser().uid)
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      setTimeout(() => this.checkValues(), 500)
    })
  }

  checkValues = async () => {
    if (this.state.name && this.exercisesNames.includes(this.state.name)) {
      if (!(this.isEdit && this.origName === this.state.name)) {
        this.setState({
          errorMessage: ERROR_NAME,
          formIsValid: false
        })
        return
      }
    }
    if ((this.state.repeatsSetMax && this.state.repeatsMax) &&
      (+this.state.repeatsSetMin > +this.state.repeatsSetMax)) {
      this.setState({
        errorMessage: ERROR_MIN,
        formIsValid: false
      })
      return
    }

    if ((this.state.repeatsSetMax && this.state.repeatsMax) &&
      (+this.state.repeatsSetMax > +this.state.repeatsMax)) {
      this.setState({
        errorMessage: ERROR_MAX,
        formIsValid: false
      })
      return
    }

    this.setState({errorMessage: ''})

    if (this.state.name &&
      this.state.repeatsMax &&
      this.state.repeatsSetMax &&
      this.state.repeatsSetMin) {
      this.enableSubmit()
      return
    }

    this.disableSubmit()
  }

  enableSubmit = () => {
    this.setState({formIsValid: true})
  }

  disableSubmit = () => {
    this.setState({formIsValid: false})
  }

  onFormSubmit = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    this.checkValues()
    if (!this.state.formIsValid) return
    const model = {
      id: this.state.id,
      name: this.state.name,
      repeatsMax: Number(this.state.repeatsMax),
      repeatsSetMax: Number(this.state.repeatsSetMax),
      repeatsSetMin: Number(this.state.repeatsSetMin)
    }
    this.onSubmitHandler(model)
  }

  onCancel = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.props.onCancel(e)
  }

  render() {
    return (
      <ExerciseForm
        saving={this.state.saving}
        isValid={this.state.formIsValid}
        errorMessage={this.state.errorMessage}
        onSubmit={this.onFormSubmit}
        onChange={this.handleInputChange}
        onCancel={this.props.onCancel}
        name={this.state.name}
        className={this.props.className}
        repeatsMax={this.state.repeatsMax}
        repeatsSetMax={this.state.repeatsSetMax}
        repeatsSetMin={this.state.repeatsSetMin}
        isEdit={this.isEdit}
      />
    )
  }
}

export default ExcerciseFormContainer
// import React, {Component} from 'react'

// import * as api from 'api'

// import Loader from 'components/Loader'
// import ExerciseForm from 'components/ExerciseForm'

// const ERROR_NAME = 'This name is already taken, please choose another.'
// const ERROR_MIN = 'Minimum repeats per set have to be less or equal than maximum repeats per set.'
// const ERROR_MAX = 'max repeats per set have to be less or equalthan max repeats per workout'

// class ExcersiceFormContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       formIsValid: false,
//       loading: true,
//     }
//     this.exerciseId = props.exerciseId
//     this.isEdit = props.isEdit
//     this.onSubmitHandler = props.onSubmit
//   }

//   async componentDidMount() {
//     this._isMounted = true
//     this.exercises = await this.getAllExercises()
//     this.exercisesNames = this.exercises.map(e => e.name)
//     if (!this._isMounted) return
//     if (this.isEdit) {
//       const exercise = this.exercises.find(e => e.id === this.exerciseId)
//       this.origName = exercise.name
//       this.setState({
//         name: exercise.name,
//         repeatsMax: exercise.repeatsMax,
//         repeatsSetMax: exercise.repeatsSetMax,
//         repeatsSetMin: exercise.repeatsSetMin
//       })
//     }
//     this.setState({loading: false})
//   }

//   componentWillUnmount() {
//     this._isMounted = false
//   }

//   async getAllExercises() {
//     return api.getAllExercises(api.currentUser().uid)
//   }

//   handleInputChange = (e) => {
//     this.setState({[e.target.name]: e.target.value}, () => {
//       setTimeout(() => this.checkValues(), 200)
//     })
//   }

//   checkValues = async () => {
//     if (this.state.name && this.exercisesNames.includes(this.state.name)) {
//       if (!(this.isEdit && this.origName === this.state.name)) {
//         this.setState({
//           errorMessage: ERROR_NAME,
//           formIsValid: false
//         })
//         return
//       }
//     }

//     if ((this.state.repeatsSetMax && this.state.repeatsMax) &&
//       (+this.state.repeatsSetMin > +this.state.repeatsSetMax)) {
//       this.setState({
//         errorMessage: ERROR_MIN,
//         formIsValid: false
//       })
//       return
//     }

//     if ((this.state.repeatsSetMax && this.state.repeatsMax) &&
//       (+this.state.repeatsSetMax > +this.state.repeatsMax)) {
//       this.setState({
//         errorMessage: ERROR_MAX,
//         formIsValid: false
//       })
//       return
//     }

//     this.setState({errorMessage: ''})

//     if (this.state.name &&
//       this.state.repeatsMax &&
//       this.state.repeatsSetMax &&
//       this.state.repeatsSetMin) {
//       this.enableSubmit()
//     }
//   }

//   enableSubmit = () => {
//     this.setState({formIsValid: true})
//   }

//   disableSubmit = () => {
//     this.setState({formIsValid: false})
//   }

//   onFormSubmit = async (e) => {
//     e.preventDefault()
//     const model = {
//       name: this.state.name,
//       repeatsMax: this.state.repeatsMax,
//       repeatsSetMax: this.state.repeatsSetMax,
//       repeatsSetMin: this.state.repeatsSetMin
//     }
//     this.onSubmitHandler(model)
//   }

//   render() {
//     if (this.state.loading) return <Loader />

//     return (
//       <ExerciseForm
//         isValid={this.state.formIsValid}
//         errorMessage={this.state.errorMessage}
//         onSubmit={this.onFormSubmit}
//         onChange={this.handleInputChange}
//         name={this.state.name}
//         repeatsMax={this.state.repeatsMax}
//         repeatsSetMax={this.state.repeatsSetMax}
//         repeatsSetMin={this.state.repeatsSetMin}
//       />
//     )
//   }
// }

// export default ExcersiceFormContainer
