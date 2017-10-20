import React from 'react'

export default function View(
  {name, children, withTabBar = true, withTopBar = true}
) {
  return (
    <div className={'View ' +
      name +
      (withTabBar ? ' withTabBar ' : ' ') +
      (withTopBar ? ' withTopBar ' : ' ') }
    >
      {children}
    </div>
  )
}
