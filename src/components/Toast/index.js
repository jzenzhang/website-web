import React from 'react'
import ReactDOM from 'react-dom'
import ToastComponent from './Toast'
import toast from './Toast.module.scss'



function createElement(type, text, time) {
  let div = Symbol()
  div = document.createElement('div')
  div.className = toast['toast-box']
  document.body.appendChild(div)
  ReactDOM.render(<ToastComponent type={type} text={text} />, div)
  remove(div, time)
}

function remove(div, time) {
  setTimeout(() => {
    div.classList.add(toast['remove'])
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }, 500)
  }, time || 3000)
}

const Toast = {
  info(text, time) {
    return createElement('info', text, time)
  },
  error(text, time) {
    return createElement('error', text, time)
  }
}

export default Toast