import React, { Component } from 'react'
import Timer from 'components/Timer'

class TimerContainer extends Component {
  constructor({startTime, paused, onChange}) {
    super()
    this.onChange = onChange
    if (window.localStorage.getItem('sweathard/Timer') !== null) {
      this.state = JSON.parse(window.localStorage.getItem('sweathard/Timer'))
    } else {
      this.state = {
        time: '00:00:00',
        startTime,
        offset: 0,
        paused,
      }
    }
  }

  componentWillReceiveProps({startTime, paused}) {
    if (startTime === this.state.startTime && paused === this.state.paused) return
    if (startTime === this.state.startTime) {
      if (paused) {
        this.stopTimer()
        const pausedAt = Date.now()
        this.setState({paused, pausedAt})
      } else {
        this.startTimer()
        const offset = new Date() - this.state.pausedAt + this.state.offset
        this.setState({paused, offset})
      }
    }
    if (startTime !== this.state.startTime) {
      this.setState({
        paused,
        startTime,
        elapsed: 0,
        offset: 0,
      })
    }
  }

  componentDidMount () {
    if (!this.state.paused) this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
    this.removeSavedState()
  }

  componentWillUpdate(nextProps, nextState) {
    this.saveState(nextState)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.time !== nextState.time ||
      this.state.paused !== nextState.paused
  }

  saveState(state) {
    window.localStorage.setItem('sweathard/Timer', JSON.stringify(state))
  }

  removeSavedState() {
    window.localStorage.removeItem('sweathard/Timer')
  }

  startTimer() {
    this.tickTimer = setInterval(this.tick, 100)
    this.onChangeTimer = setInterval(this.handleElapsedTime, 1000)
  }

  stopTimer() {
    clearInterval(this.tickTimer)
    clearInterval(this.onChangeTimer)
  }

  tick = () => {
    if (!this.state.paused) {
      const elapsed = new Date() - this.state.startTime - this.state.offset
      this.setState({
        elapsed,
        time: new Date(elapsed).toISOString().substr(11, 8)})
    }
  }

  handleElapsedTime = () => {
    this.onChange(this.state.elapsed, this.state.offset)
  }

  render() {
    return (
      <Timer
        paused={this.state.paused}
        pausedText="Workout paused."
        time={this.state.time}
      />
    )
  }
}

export default TimerContainer
