import React, { PureComponent } from 'react'
import cs from 'classnames'
import styles from './ChatRoom.module.scss'

class ChatRoom extends PureComponent {
  constructor(props) {
    super(props)

  }

  showChat = (e) => {
    console.log(e);

  }
  render() {
    return (
      <div>
        <svg onClick={e => this.showChat(e)} className={cs('icon', styles['chatroom-icon'])} aria-hidden="true">
          <use xlinkHref="#icon-Chat"></use>
        </svg>

      </div>
    )
  }
}

export default ChatRoom