import React from 'react'
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'

import './styles.css'

const TabBarLink = ({to, icon, iconActive, text, match}) => {
  const isIndex = match.path === '/'
  let isActive = false

  if (to === '/') {
    isActive = isIndex
  } else {
    isActive = match.path.indexOf(to) !== -1
  }

  const className = [
    'tab-bar-link',
    isActive ? 'active' : null,
  ].join(' ')

  return (
    <Link to={to} className={className}>
      <img
        src={isActive ? iconActive.uri : icon.uri}
        alt={text}
        className="tab-bar-link__img"
      />
      {text && <span className="tab-bar-link__text">{text}</span>}
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
