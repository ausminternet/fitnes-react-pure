import React, { Component } from 'react'

export default class Sheet extends Component {
  constructor({show, component, ...rest}) {
    super()
    this.component = component
    this.rest = rest
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
    this.setState({
      show: true,
      opening: true
    })
    setTimeout(() => this.setState({opening: false}), 300)
  }

  closeSheet = () => {
    this.setState({closing: true})
    setTimeout(() => this.setState({
      closing: false,
      show: false
    }), 300)
  }

  render() {
    const openClass = this.state.show ? 'open' : ''
    const openingClass = this.state.opening ? 'opening' : ''
    const closingClass = this.state.closing ? 'closing' : ''
    return (
      <div className={`Sheet ${openClass} ${openingClass} ${closingClass} `}>
        {this.state.show &&
          <this.component onClose={this.closeSheet} {...this.rest} />
        }
      </div>
    )
  }
}
