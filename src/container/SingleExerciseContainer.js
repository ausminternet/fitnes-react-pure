import React, {Component} from 'react'

import * as api from 'api'

import SingleExercise from 'components/SingleExercise'

class SingleExerciseContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
    this.id = props.id
  }

  async componentDidMount() {
    this._isMounted = true
    const exercise = await api.getExercise(api.currentUser().uid, this.id)
    if (this._isMounted) {
      this.setState({
        exercise,
        loading: false,
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <SingleExercise
        loading={this.state.loading}
        exercise={this.state.exercise}
      />
    )
  }
}

export default SingleExerciseContainer
