import React from 'react'
import Layout from 'components/Layout'
import TopBarLink from 'components/TopBarLink'

export default function Profile() {
  return (
    <Layout
      title="Settings"
      buttonRight={<TopBarLink text="Logout" to="/logout" />}
    />
  )
}
