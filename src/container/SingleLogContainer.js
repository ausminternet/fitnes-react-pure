import React, {Component} from 'react'
import PropTypes from 'prop-types'

import * as api from 'api'

import SingleLog from 'components/SingleLog'

class SingleLogContainer extends Component {
  constructor(props) {
    super(props)
    this.id = props.id
    this.state = {
      loading: true,
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const log = await api.getLog(api.currentUser().uid, this.id)
    if (this._isMounted) {
      this.setState({
        log,
        loading: false,
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <SingleLog loading={this.state.loading} log={this.state.log} />
    )
  }
}

SingleLogContainer.PropTypes = {
  id: PropTypes.string.isRequired,
}

export default SingleLogContainer
