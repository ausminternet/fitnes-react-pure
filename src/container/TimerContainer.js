import React, { Component } from 'react'
import Timer from 'components/Timer'

class TimerContainer extends Component {
  constructor({startTime, paused, onChange}) {
    super()
    this.onChange = onChange
    this.startTime = startTime
    this.elapsed = 0
    this.offset = 0
    this.state = {paused}
  }

  componentWillReceiveProps({startTime, paused}) {
    if (startTime === this.startTime && paused === this.state.paused) return
    if (startTime === this.startTime) {
      if (paused) {
        this.stopTimer()
        this.pausedAt = Date.now()
        this.setState({paused})
      } else {
        this.startTimer()
        this.offset = new Date() - this.pausedAt + this.offset
        this.setState({paused})
      }
    }
    if (startTime !== this.startTime) {
      this.setState({paused})
      this.startTime = startTime
      this.elapsed = 0
      this.offset = 0
    }
  }

  componentDidMount () {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer() {
    this.tickTimer = setInterval(this.tick, 50)
    this.onChangeTimer = setInterval(this.handleElapsedTime, 1000)
  }

  stopTimer() {
    clearInterval(this.tickTimer)
    clearInterval(this.onChangeTimer)
  }

  tick = () => {
    if (!this.paused) {
      this.elapsed = new Date() - this.startTime - this.offset
      this.setState({time: new Date(this.elapsed).toISOString().substr(11, 8)})
    }
  }

  render() {
    return (
      <Timer
        paused={this.state.paused}
        pausedText="Workout paused."
        time={this.state.time} />
    )
  }
}

export default TimerContainer
