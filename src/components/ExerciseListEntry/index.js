import React, {Component} from 'react'

import * as api from 'api'

import SingleExercise from 'components/SingleExercise'
import ExerciseFormContainer from 'container/ExerciseFormContainer'

import './styles.css'

class ExerciseListEntry extends Component {
  state = {
    exercise: this.props.exercise,
    exercises: this.props.exercises
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      exercises: nextProps.exercises
    })
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  toggleEdit = (e) => {
    if (e) e.stopPropagation()
    this.setState({
      showEdit: !this.state.showEdit
    })
  }

  delete = async () => {
    if (window.confirm('Delete exercise?')) {
      await api.deleteExercise(api.currentUser().uid, this.state.exercise.id)
      this.props.onDelete(this.state.exercise)
    }
  }

  onSubmitHandler = async (exercise) => {
    this.setState({saving: true})
    await api.updateExercise(api.currentUser().uid, exercise)
    this.setState({exercise}, this.toggleEdit())
    this.props.onExerciseChange(exercise)
  }

  render() {
    const {name, repeatsMax, repeatsSetMax, repeatsSetMin} = this.state.exercise

    const className = [
      'exercise-list-entry',
      this.state.showDetails ? 'is-open' : 'is-closed'
    ].join(' ')

    return (
      <div className={className}>
        {!this.state.showEdit &&
          <div
            className="exercise-list-entry__container"
            onClick={this.toggleDetails}
          >
            <div className="exercise-list-entry__arrow"></div>
            <span className="exercise-list-entry__name">{name}</span>
            {!this.state.showDetails && !this.state.showEdit &&
            <div className="exercise-list-entry__repeats">
              {repeatsSetMin} / {repeatsSetMax} / {repeatsMax}
            </div>
            }
          </div>
        }
        {this.state.showDetails && !this.state.showEdit &&
          <SingleExercise
            exercise={this.state.exercise}
            onEditClick={this.toggleEdit}
            onDeleteClick={this.delete}
          />
        }
        {this.state.showEdit &&
          <ExerciseFormContainer
            exercise={this.state.exercise}
            exercises={this.state.exercises}
            onSubmit={this.onSubmitHandler}
            onCancel={this.toggleEdit}
            isEdit={true}
            saving={this.state.saving}
          />
        }
      </div>
    )
  }
}
// const ExerciseListEntry = ({exercise}) => {
//   const {repeatsMax, repeatsSetMax, repeatsSetMin, id, name} = exercise
//   return (
//     <Link
//       to={`/exercises/${id}`}
//       className="exercise-list-entry"
//     >
//       <span className="exercise-list-entry__name">{name}</span>
//       <div className="exercise-list-entry__repeats">
//         {repeatsSetMin} / {repeatsSetMax} / {repeatsMax}
//       </div>
//     </Link>
//   )
// }

export default ExerciseListEntry
