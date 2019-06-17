import React, { PureComponent } from 'react'
import cs from 'classnames'
import styles from './ChatRoom.module.scss'

class ChatRoom extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <svg className={cs('icon', styles['chatroom-icon'])} aria-hidden="true">
        <use xlinkHref="#icon-Chat"></use>
      </svg>
    )
  }
}

export default ChatRoom