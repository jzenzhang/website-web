import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react';

import store from '../../store/index'
import Login from './login'

function unmounted() {
  div.classList.add('remove')
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
    div = ''
  }, 300)
}

let div = ''

function createElement(type) {
  if (div) {
    return
  }
  div = document.createElement('div')
  div.className = 'login-box'
  document.body.appendChild(div)
  ReactDOM.render(<Provider store={store}><Login type={type} cancel={unmounted} /></Provider>, div)
  return div
}

const params = {
  show(type) {
    return createElement(type)
  },
  hide() {
    return unmounted()
  }
}

function LoginComponent(target) {
  target.LoginComponent = params
}
export default LoginComponent