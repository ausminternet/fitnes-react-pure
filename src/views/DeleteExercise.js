import React, {Component} from 'react'
import * as api from 'api'
import Loader from 'components/Loader'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.id = props.computedMatch.params.id
  }

  componentDidMount() {
    api.deleteExercise(api.curentUser().uid, this.id)
  }

  render () {
    return <Loader />
  }
}

export default Logout
