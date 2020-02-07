import React from 'react'
import cs from 'classnames'
import styles from './ChatRoom.module.scss'
import { inject, observer } from 'mobx-react';
import {Button} from '../index'
import LoginComponent from '../login/index'
import ChatList from './ChatList/ChatList'
import io from 'socket.io-client'
import { observable } from 'mobx';
const socket = io('ws://106.14.225.234:8080/')

@inject('store')
@observer
class ChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.chatModule = this.props.store.chatModule
    this.loginModule = this.props.store.loginModule
  }

  @observable chatText = ''
  @observable chatState = false

  changeChatText = (event) => {
    this.chatText = event.target.value
  }

  close=()=>{
    this.chatState = false
  }
  showChat=()=>{
    this.chatState = true
  }

  componentDidMount(){
    socket.on("message", (msg) => {
      const { message } = msg
      this.chatModule.changeChatList(message)
    })
  }

  @LoginComponent
  submit = () => {
    if (!this.loginModule.loginStatus) {
      this.LoginComponent.show()
      return false
    }
    if(!this.chatText){
      return 
    }
    socket.emit('message', { userName: this.loginModule.userInfo.userName, msg: this.chatText })
    this.chatText = ''
  }
  render() {
    return (
      this.chatState ?
      <div className={styles.chatroom}>
        <div onClick={this.close} className={styles.close}>×</div>
        <ChatList chatList={this.chatModule.chatList}></ChatList>
        <textarea className={styles.textarea} value={this.chatText} onChange={this.changeChatText}></textarea>
        <Button className={styles.submit} onClick={this.submit}>确定</Button>
      </div>
      : 
      <svg onClick={this.showChat} className={cs('icon', styles['chatroom-icon'])} aria-hidden="true">
          <use xlinkHref="#icon-Chat"></use>
        </svg>
    )
  }
}

export default ChatRoom