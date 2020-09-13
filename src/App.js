import React from 'react'
import './App.css'
import Video from './video/VideoChatContainer'

function App () {
  return (
    <div className='app'>
      <h1>React Video Chat App</h1>
      <h2>WebRTC + Firebase</h2>
      <Video/>
    </div>
  )
}

export default App
