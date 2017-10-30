import React from 'react'

import './styles.css'

export default function ListHeader ({children}) {
  return (
    <h3 className="list-header">{children}</h3>
  )
}
