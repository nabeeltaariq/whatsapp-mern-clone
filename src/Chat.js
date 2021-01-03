import React from 'react'
import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './Chat.css'

function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>last seen..</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <div className='chat__message '>
          <p>
            <span className='chat__name'>Bahtti</span>
            this would be a message
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className='chat__message chat__receiver'>
          <p>
            <span className='chat__name'>Bahtti</span>
            this would be a message
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className=' chat__message'>
          <p>
            <span className='chat__name'>Bahtti</span>
            this would be a message
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p>
        </div>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input type='text' placeholder='Type a message' />
          <button type='submit'>Send a Message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
