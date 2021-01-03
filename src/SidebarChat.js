import React from 'react'
import './SidebarChat.css'
import Avatar from '@material-ui/core/Avatar'

function SideBarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar />
      <div className='sidebarChat__info'>
        <h2>Room Info</h2>
        <p>This si sthe last message</p>
      </div>
    </div>
  )
}

export default SideBarChat
