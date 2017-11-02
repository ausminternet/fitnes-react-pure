import React from 'react'
import PropTypes from 'prop-types'

const TopBarButton = ({onClick, text, icon}) => {
  return (
    <button onClick={onClick} className="top-bar-link">
      {icon && <img src={icon.uri} alt={text} className="top-bar-link__img"/>}
      {text && <span className="top-bar-link__text">{text}</span>}
    </button>
  )
}

TopBarButton.PropTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  icon: PropTypes.shape({
    uri: PropTypes.string,
  }),
}

export default TopBarButton
