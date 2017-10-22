import React from 'react'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'

const TabBarLink = ({to, icon, iconActive, text, match}) => {
  const isIndex = match.path === '/'
  let isActive = false

  if (to === '/') {
    isActive = isIndex
  } else {
    isActive = match.path.indexOf(to) !== -1
  }

  const className = [
    'TabBarLink',
    isActive ? 'active' : null,
  ].join(' ')

  return (
    <Link to={to} className={className}>
      {isActive
        ? <img src={iconActive.uri} alt={text}/>
        : <img src={icon.uri} alt={text}/>}
      {text && <span>{text}</span>}
    </Link>
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
  match: PropTypes.object
}

export default withRouter(TabBarLink)
