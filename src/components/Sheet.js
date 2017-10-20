import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
// import CloseSheetButton from 'components/CloseSheetButton'

export default class Sheet extends Component {
  constructor({show, component, redirectTo, ...rest}) {
    super()
    this.component = component
    this.rest = rest
    this.redirectTo = redirectTo
    console.log(redirectTo)
    this.state = {
      show,
      opening: false,
      closing: false
    }
  }

  componentWillReceiveProps({show, ...rest}) {
    if (show !== this.state.show) {
      show ? this.openSheet() : this.closeSheet()
    }
    this.rest = rest
  }

  openSheet() {
    const setSheetOpen = () => {
      this.setState({opening: false})
      this.sheet.removeEventListener('animationend', setSheetOpen, false)
    }
    this.sheet.addEventListener('animationend', setSheetOpen, false)
    this.setState({
      show: true,
      opening: true
    })
  }

  handleOnCLose = () => {
    this.setState({redirect: true})
  }

  closeSheet = () => {
    const setSheetClosed = () => {
      this.setState({
        closing: false,
        show: false
      })
      this.sheet.removeEventListener('animationend', setSheetClosed, false)
    }
    this.setState({closing: true})
    this.sheet.addEventListener('animationend', setSheetClosed, false)
  }

  render() {
    if (this.state.redirect) {
      console.log(this.redirectTo)
      return <Redirect to={this.redirectTo} />
    }

    const openClass = this.state.show ? 'open' : ''
    const openingClass = this.state.opening ? 'opening' : ''
    const closingClass = this.state.closing ? 'closing' : ''

    return (
      <div
        ref={(sheet) => { this.sheet = sheet }}
        className={`Sheet ${openClass} ${openingClass} ${closingClass} `}
      >
        {this.state.show &&
          <this.component onClose={this.handleOnCLose} {...this.rest} />
        }
      </div>
    )
  }
}
