import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';

import store from '../../store/index'
import Login from './login'
import './login.scss'

let div = {}

function unmounted() {
  div.classList.add('remove')
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
  }, 300)
}


function createElement() {
  div = document.createElement('div')
  div.className = 'login-box'
  document.body.appendChild(div)
  ReactDOM.render(<Provider store={store}><Login cancel={unmounted} /></Provider>, div)
}

const params = {
  show() {
    return createElement()
  },
  hide() {
    return unmounted()
  }
}

function LoginComponent(target) {
  target.LoginComponent = params
}
export default LoginComponent