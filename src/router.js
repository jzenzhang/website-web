import React,{lazy} from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import loadable from 'loadable-components'

import HomeLayout from './layout/Home/Home'
// import AboutmeLayout from './layout/Aboutme/Aboutme'
import ChatRoom from './components/ChatRoom/ChatRoom'
import { drag } from './utils/index'
const AboutmeLayout = loadable(() => import('./layout/Aboutme/Aboutme'));
var ChatModule = drag(ChatRoom, { bottom: '50px', right: '10px' })
function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={HomeLayout} />
        <Route path="/ncov" component={AboutmeLayout} />
        <Redirect from="/*" to="/home" />
      </Switch>
      <Route path="/" component={ChatModule}></Route>
    </BrowserRouter>
  )
}

export default RouterPage