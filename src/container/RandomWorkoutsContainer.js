import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RandomWorkouts from 'components/RandomWorkouts'
import * as api from 'api'

class RandomWorkoutsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      efforts: this.props.efforts,
      loading: true,
      exercises: [],
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const exercises = await api.getAllExercises(api.currentUser().uid)
    if (this._isMounted) {
      this.setState({
        loading: false,
        exercises
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <RandomWorkouts
        loading={this.state.loading}
        efforts={this.state.efforts}
        hasExercises={this.state.exercises.length !== 0}
      />
    )
  }
}

RandomWorkouts.PropTypes = {
  efforts: PropTypes.array,
}

export default RandomWorkoutsContainer
