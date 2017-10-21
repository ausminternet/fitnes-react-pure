import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TopBarLink = ({to, text, icon}) => {
  return (
    <Link to={to} className="TopBarLink">
      {icon && <img src={icon} alt={text}/>}
      {text && <span>{text}</span>}
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
