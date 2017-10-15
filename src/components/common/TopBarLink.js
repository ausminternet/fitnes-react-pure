import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBarLink ({to, text, icon}) {
  return (
    <Link to={to} className="TopBarButton">
      {icon && <img src={icon} alt={text}/>}
      {text && <span>{text}</span>}
    </Link>
  )
}
