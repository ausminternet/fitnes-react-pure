import React from 'react'
import PropTypes from 'prop-types'

const TopBarButton = ({onClick, icon, text, ...rest}) => {
  return (
    <button className="TopBarButton" onClick={onClick} {...rest}>
      {icon && <img src={icon} alt={text}/>}
      {text && <span>{text}</span>}
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
