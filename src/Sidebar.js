import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Avatar from '@material-ui/core/Avatar'
import Input from '@material-ui/core/Input'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://scontent.flhe2-2.fna.fbcdn.net/v/t1.0-1/c0.0.200.200a/p200x200/87008310_1413624415513297_328817409077018624_o.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_eui2=AeESbWRxbCyR0GLCFnze0rP_zC_DsJ-EprPML8Own4Sms8iq_ry2HMfXrXEJ1C8Lsot7XfGkTMIse7Bj2fZeFcIP&_nc_ohc=JX6luul99WcAX_gP5lI&_nc_ht=scontent.flhe2-2.fna&tp=27&oh=677fd7471eeb0883332e882b315addd0&oe=60179BE2' />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar_search '>
        <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or start a new char' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
