import React, {Component} from 'react'

import * as api from 'api'

import ExerciseList from 'components/ExerciseList'
import ExerciseFormContainer from 'container/ExerciseFormContainer'
import Message from 'components/Message'
import Layout from 'components/Layout'
import TopBarButton from 'components/TopBarButton'
import AddIcon from 'media/icons/white/add.png'

class Exercises extends Component {
  state = {
    showAddForm: false,
    loading: true,
    exercises: [],
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

  componentWillUnmount() {
    this._isMounted = false
  }

  onExerciseAdd = async (exercise) => {
    this.setState({saving: true})
    const model = {
      name: exercise.name,
      repeatsMax: exercise.repeatsMax,
      repeatsSetMax: exercise.repeatsSetMax,
      repeatsSetMin: exercise.repeatsSetMin
    }
    model['id'] = await api.addExercise(api.currentUser().uid, model)
    this.toggleAddForm()
    const exercises = this.state.exercises
    exercises.push(model)
    this.setState({
      exercises,
      saving: false
    })
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

  toggleAddForm = () => {
    this.setState({showAddForm: !this.state.showAddForm})
  }

  render() {
    const button = this.state.showAddForm
      ? <TopBarButton text="Cancel" onClick={this.toggleAddForm} />
      : <TopBarButton icon={{uri: AddIcon}} onClick={this.toggleAddForm} />

    return (
      <Layout
        title={this.state.showAddForm ? 'Add new exercise' : 'Exercises'}
        name="exercises"
        buttonRight={!this.state.loading && button}
      >
        {this.state.showAddForm && !this.state.loading &&
          <ExerciseFormContainer
            saving={this.state.saving}
            exercises={this.state.exercises}
            onSubmit={this.onExerciseAdd}
            onCancel={this.toggleAddForm}
            className="add-form"
          />
        }
        {this.state.exercises.length === 0 && !this.state.loading &&
          <Message>
            <p>No exercises available.</p>
            <p><strong>Go and create your first exercise!</strong></p>
          </Message>
        }
        {this.state.exercises.length !== 0 &&
          <ExerciseList
            loading={this.state.loading}
            exercises={this.state.exercises}
            onExerciseChange={this.onExerciseChange}
            onExerciseDelete={this.onExerciseDelete}
          />
        }
      </Layout>
    )
  }
}

export default Exercises
