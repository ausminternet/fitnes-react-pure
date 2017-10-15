import React, { Component } from 'react'

class Timer extends Component {
  constructor({startTime, paused}) {
    super()
    this.state = {
      elapsed: 0,
      startTime,
      paused,
      offset: 0,
      pausedAt: 0
    }
  }

  componentWillReceiveProps({startTime, paused}) {
    if (startTime === this.state.startTime &&
      paused === this.state.paused) return
    if (startTime === this.state.startTime) {
      if (paused) {
        this.setState({
          paused,
          pausedAt: Date.now()
        })
      } else {
        this.setState({
          paused,
          offset: new Date() - this.state.pausedAt + this.state.offset
        })
      }
    } else {
      this.setState({
        startTime,
        offset: 0,
        paused
      })
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    if (!this.state.paused) {
      this.setState({
        elapsed: new Date() - this.state.startTime - this.state.offset
      })
      this.calcTime()
    }
  }

  calcTime() {
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    var date = new Date(null)
    date.setSeconds(seconds)
    this.time = date.toISOString().substr(11, 8)
  }

  render() {
    const show = (this.state.paused) ? 'Workout paused.' : this.time
    return (
      <div className="Timer">
        {show}
      </div>
    )
  }
}

export default Timer
