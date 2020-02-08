import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import HomeLayout from './layout/Home/Home'
import Aboutme from './layout/Aboutme/Aboutme'
import ChatRoom from './components/ChatRoom/ChatRoom'
import { drag } from './utils/index'
var ChatModule = drag(ChatRoom, { bottom: '50px', right: '10px' })
function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeLayout} />
        <Route path="/about_me" component={Aboutme} />
        <Redirect from="/*" to="/home" />
      </Switch>
      <Route path="/" component={ChatModule}></Route>
      {/* <Route exact path="/about_me" component={Aboutme}></Route> */}
    </BrowserRouter>
  )
}

export default RouterPage