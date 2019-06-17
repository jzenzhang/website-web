import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeLayout from './layout/Home'
import ChatRoom from './components/ChatRoom/ChatRoom'
import { drag } from './utils/index'
var asd = drag(ChatRoom, { bottom: '200px', right: 0 })
function RouterPage() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeLayout}></Route>
      <Route path="/" component={asd}></Route>
    </BrowserRouter>
  )
}

export default RouterPage