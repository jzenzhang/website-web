import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeLayout from './layout/Home/Home'
import Aboutme from './layout/Aboutme/Aboutme'
import ChatRoom from './components/ChatRoom/ChatRoom'
import { drag } from './utils/index'
var ChatModule = drag(ChatRoom, { bottom: '50px', right: '10px' })
function RouterPage() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeLayout}></Route>
      <Route path="/" component={ChatModule}></Route>
      <Route exact path="/asd" component={Aboutme}></Route>
    </BrowserRouter>
  )
}

export default RouterPage