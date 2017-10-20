import React from 'react'
import TabBarLink from 'components/TabBarLink'
import ProfileIcon from 'media/icons/black/settings.png'
import ProfileIconActive from 'media/icons/red/settings.png'
import SportIcon from 'media/icons/black/sport.png'
import SportIconActive from 'media/icons/red/sport.png'
import LogIcon from 'media/icons/black/calendar.png'
import LogIconActive from 'media/icons/red/calendar.png'

const TabBar = ({children}) => {
  return (
    <div className="TabBar">
      <TabBarLink to="/workout" icon={SportIcon} iconActive={SportIconActive} text="Start"/>
      <TabBarLink to="/log" icon={LogIcon} iconActive={LogIconActive} text="Log" />
      <TabBarLink to="/profile" icon={ProfileIcon} iconActive={ProfileIconActive} text="Profile" />
    </div>
  )
}

export default TabBar
