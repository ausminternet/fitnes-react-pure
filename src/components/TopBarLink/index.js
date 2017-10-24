import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './styles.css'

const TopBarLink = ({to, text, icon}) => {
  return (
    <Link to={to} className="top-bar-link">
      {icon && <img src={icon.uri} alt={text} className="top-bar-link__img"/>}
      {text && <span className="top-bar-link__text">{text}</span>}
    </Link>
  )
}

TopBarLink.PropTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.shape({
    uri: PropTypes.string,
  }),
}

export default TopBarLink
