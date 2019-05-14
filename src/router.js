import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

import HomePage from './view'
import About from './view/about/about'

const history = createBrowserHistory()

function RouterPage() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/aboutme" component={About}></Route>
      </Switch>
    </Router>
  )
}

export default RouterPage