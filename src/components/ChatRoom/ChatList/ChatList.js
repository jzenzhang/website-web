import React from 'react'
import { inject, observer } from 'mobx-react';
import styles from './ChatList.module.scss'
import $z from 'z-formatter'


const right = {
  display: 'flex',
  flexDirection: 'row-reverse',
  padding: '10px 0',
}

const left = {
  display: 'flex',
  padding: '10px 0',
}

const iconRight = {
  marginLeft: '10px',
  border: '1px solid #666666',
  width: '30px',
  height: '30px',
  lineHeight: '26px',
  textAlign: 'center',
  borderRadius: '3px',
  fontSize: '30px',
  fontWeight: 'bold',
  userSelect: 'none'
}

const contextRight = {
  maxWidth: '80%',
  wordBreak: 'break-all',
  boxSizing: 'border-box',
  background: '#dddddd',
  minHeight: '20px',
  lineHeight: '20px',
  padding: '5px 10px',
  borderRadius: '5px'
}

const iconLeft = {
  marginRight: '10px',
  border: '1px solid #666666',
  width: '30px',
  height: '30px',
  lineHeight: '26px',
  textAlign: 'center',
  borderRadius: '3px',
  fontSize: '30px',
  fontWeight: 'bold',
  userSelect: 'none'
}

const contextLeft = {
  maxWidth: '80%',
  wordBreak: 'break-all',
  boxSizing: 'border-box',
  background: '#cccccc',
  minHeight: '20px',
  lineHeight: '20px',
  padding: '5px 10px',
  borderRadius: '5px'
}

function ListItem(props) {
  if (props.item.userName === props.localName) {
    return (
      <div style={right}>
        <div style={iconRight}>{props.item.userName.slice(0, 1)}</div>
        <div style={contextRight}>{props.item.msg}</div>
      </div>
    )
  }

  return (
    <div style={left}>
      <span style={iconLeft}>{props.item.userName.slice(0, 1)}</span>
      <span style={contextLeft}>{props.item.msg}</span>
    </div>
  )
}

@inject('store')
@observer
class ChatList extends React.Component {
  constructor(props) {
    super(props)
    this.chatModule = this.props.store.chatModule
    this.loginModule = this.props.store.loginModule
  }
  componentDidUpdate() {
    this.chatlistDom.childNodes[this.chatlistDom.childNodes.length - 1].scrollIntoView()
  }
  render() {
    return (
      <div ref={chatlistDom => this.chatlistDom = chatlistDom} className={styles.chatlist}>
        {
          this.props.chatList.map((item, index) => (
            <ListItem key={index} item={item} localName={this.loginModule.userInfo.userName} />
          ))
        }
      </div>
    )
  }
}

export default ChatList