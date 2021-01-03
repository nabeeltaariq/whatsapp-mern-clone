import React from 'react'
import { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './Chat.css'

function Chat({ messages }) {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3></h3>
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
        {messages.map((message) => (
          <div
            className={`chat__message  ${message.received && 'chat__receiver'}`}
          >
            <p>
              <span className='chat__name'>{message.name}</span>
              {message.message}
              <span className='chat__timestamp'>{message.created_at}</span>
            </p>
          </div>
        ))}
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
