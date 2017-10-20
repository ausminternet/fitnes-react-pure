import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'

class TabBarLink extends Component {
  constructor({to, icon, iconActive, text, location, staticContext, ...rest}) {
    super()
    this.rest = rest
    this.state = {
      to,
      icon,
      iconActive,
      text,
      location
    }
  }

  componentWillReceiveProps({location}) {
    this.setState({location})
  }

  render() {
    return (
      <NavLink to={this.state.to} className="TabBarLink" activeClassName="active" {...this.rest}>
        {this.state.location.pathname === this.state.to
          ? <img src={this.state.iconActive} alt={this.state.text}/>
          : <img src={this.state.icon} alt={this.state.text}/>}
        {this.state.text && <span>{this.state.text}</span>}
      </NavLink>
    )
  }
}

export default withRouter(TabBarLink)
