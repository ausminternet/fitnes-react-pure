import React from 'react'

export default function TopBarButton ({onClick, icon, text, ...rest}) {
  return (
    <button className="TopBarButton" onClick={onClick} {...rest}>
      {icon && <img src={icon} alt={text}/>}
      {text && <span>{text}</span>}
    </button>
  )
}
