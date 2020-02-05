import React from 'react'
import { inject, observer } from 'mobx-react';
import styles from './ChatList.module.scss'
import $z from 'z-formatter'

const right = {
  display: 'flex',
  margin: '10px 0',
  textAlign: 'right'
}

const left = {
  display: 'flex',
  margin: '10px 0',
  textAlign: 'left'
}

const iconRight = {
  display: 'inline-block',
  marginLeft: '10px',
  border: '1px solid #666666',
  width: '30px',
  height: '30px',
  lineHeight: '24px',
  textAlign: 'center',
  borderRadius: '50%',
  fontSize: '30px',
  fontWeight: 'bold',
  userSelect: 'none'
}
const iconLeft = {
  display: 'inline-block',
  marginRight: '10px',
  border: '1px solid #666666',
  width: '30px',
  height: '30px',
  lineHeight: '24px',
  textAlign: 'center',
  borderRadius: '50%',
  fontSize: '30px',
  fontWeight: 'bold',
  userSelect: 'none'
}

const context = {
  flex: 1,
  display: 'inline-block',
  wordBreak: 'break-all'
}

function ListItem(props) {
  if (props.item.userName === props.localName) {
    return (
      <div style={right}>
        <span style={context}>{props.item.msg}</span>
        <span style={iconRight}>{props.item.userName.slice(0, 1)}</span>
      </div>
    )
  }

  return (
    <div style={left}>
      <span style={iconLeft}>{props.item.userName.slice(0, 1)}</span>
      <span style={context}>{props.item.msg}</span>
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