import React from 'react'
// import cs from 'classnames'
import styles from './ChatRoom.module.scss'
import { inject, observer } from 'mobx-react';
import LoginComponent from '../login/index'
import ChatList from './ChatList/ChatList'
import io from 'socket.io-client'
import $z from 'z-formatter'
import { observable } from 'mobx';
const socket = io('ws://localhost:8080/')

@inject('store')
@observer
class ChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.chatModule = this.props.store.chatModule
    this.loginModule = this.props.store.loginModule
  }

  @observable chatText = ''

  changeChatText = (event) => {
    this.chatText = event.target.value
  }
  componentDidMount(){
    socket.on("message", (msg) => {
      const { message } = msg
      this.chatModule.changeChatList(message)
    })
  }

  @LoginComponent
  submit = () => {
    if(!this.chatText){
      return 
    }
    const cookie = $z.getCookie('uuid')
    if (!cookie) {
      this.LoginComponent.show()
      return false
    }
    socket.emit('message', { userName: this.loginModule.userInfo.userName, msg: this.chatText })
    this.chatText = ''
  }
  render() {
    return (
      <div className={styles.chatroom}>
        <ChatList chatList={this.chatModule.chatList}></ChatList>
        <textarea className={styles.textarea} value={this.chatText} onChange={this.changeChatText}></textarea>
        <button className={styles.submit} onClick={this.submit}>确定</button>
      </div>
    )
  }
}

export default ChatRoom