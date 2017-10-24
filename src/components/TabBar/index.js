import React from 'react'
import TabBarLink from 'components/TabBarLink'
import ProfileIcon from 'media/icons/black/settings.png'
import ProfileIconActive from 'media/icons/blue/settings.png'
import SportIcon from 'media/icons/black/sport.png'
import SportIconActive from 'media/icons/blue/sport.png'
import LogIcon from 'media/icons/black/calendar.png'
import LogIconActive from 'media/icons/blue/calendar.png'

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
    <div className="tab-bar">
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
    </div>
  )
}

export default TabBar
