import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login'
import './login.scss'

let div = {}
let obj = ''

function unmounted() {
  div.classList.add('remove')
}


function createElement() {
  if (obj) {
    div.classList.remove('remove')
    obj = ReactDOM.render(<Login cancel={unmounted} />, div)
  } else {
    div = document.createElement('div')
    div.className = 'login-box'
    document.body.appendChild(div)
    obj = ReactDOM.render(<Login cancel={unmounted} />, div)
  }
}

const params = {
  show() {
    return createElement()
  }
}

function LoginComponent(target) {
  target.prototype.Login = params
}
export default LoginComponent