import React from 'react'
import TabBarLink from 'components/TabBarLink'
import ProfileIcon from 'media/icons/black/mixer.png'
import ProfileIconActive from 'media/icons/red/mixer.png'
import ExerciseIcon from 'media/icons/black/exercises.png'
import ExerciseIconActive from 'media/icons/red/exercises.png'
import WorkoutsIcon from 'media/icons/black/test.png'
import WorkoutsIconActive from 'media/icons/red/test.png'
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
      text: 'Logs',
    },
    {
      to: '/workouts',
      icon: WorkoutsIcon,
      iconActive: WorkoutsIconActive,
      text: 'Workouts',
    },
    {
      to: '/exercises',
      icon: ExerciseIcon,
      iconActive: ExerciseIconActive,
      text: 'Exercises',
    },
    {
      to: '/profile',
      icon: ProfileIcon,
      iconActive: ProfileIconActive,
      text: 'Settings',
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
