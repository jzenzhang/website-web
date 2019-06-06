import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomeLayout from './layout/Home'

function RouterPage() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomeLayout}></Route>
    </BrowserRouter>
  )
}

export default RouterPage