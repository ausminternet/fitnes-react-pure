import React from 'react'
import TabBarLink from 'components/TabBarLink'
import ProfileIcon from 'media/icons/black/settings.png'
import ProfileIconActive from 'media/icons/red/settings.png'
import SportIcon from 'media/icons/black/sport.png'
import SportIconActive from 'media/icons/red/sport.png'
import LogIcon from 'media/icons/black/calendar.png'
import LogIconActive from 'media/icons/red/calendar.png'

import './styles.css'

const TabBar = () => {
  const tabBarConfig = [
    {
      to: '/',
      icon: SportIcon,
      iconActive: SportIconActive,
      text: 'Start',
    },
    {
      to: '/logs',
      icon: LogIcon,
      iconActive: LogIconActive,
      text: 'Log',
    },
    {
      to: '/profile',
      icon: ProfileIcon,
      iconActive: ProfileIconActive,
      text: 'Profil',
    }
  ]
  return (
    <nav className="tab-bar">
      {tabBarConfig.map((t, i) => {
        return (
          <TabBarLink
            to={t.to}
            icon={{uri: t.icon}}
            iconActive={{uri: t.iconActive}}
            text={t.text}
            key={i}/>
        )
      })}
    </nav>
  )
}

export default TabBar
