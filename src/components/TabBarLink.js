import React from 'react'
import PropTypes from 'prop-types'
import {NavLink, withRouter} from 'react-router-dom'

const TabBarLink = ({to, icon, iconActive, text, location}) => {
  return (
    <NavLink to={to} exact className="TabBarLink" activeClassName="active">
      {location.pathname === to
        ? <img src={iconActive.uri} alt={text}/>
        : <img src={icon.uri} alt={text}/>}
      {text && <span>{text}</span>}
    </NavLink>
  )
}

TabBarLink.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.shape({
    uri: PropTypes.string,
  }),
  iconActive: PropTypes.shape({
    uri: PropTypes.string,
  }),
  text: PropTypes.string,
  location: PropTypes.object
}

export default withRouter(TabBarLink)
