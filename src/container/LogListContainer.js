import React, {Component} from 'react'

import * as api from 'api'

import LogList from 'components/LogList'

class LogListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      logs: [],
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const logs = await api.getLogs(api.currentUser().uid)
    this.setState({
      logs,
      loading: false,
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <LogList
        loading={this.state.loading}
        logs={this.state.logs}
      />
    )
  }
}

export default LogListContainer
