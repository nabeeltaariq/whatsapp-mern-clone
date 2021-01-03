import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { useEffect, useState } from 'react'
import Pusher from 'pusher-js'
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/message/sync').then((response) => {
      setMessages(response.data)
    })
    // Enable pusher logging - don't include this in production
    const pusher = new Pusher('b6f55728bf3582eb5be4', {
      cluster: 'ap2',
    })

    var channel = pusher.subscribe('message')
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
  console.log(messages)

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
