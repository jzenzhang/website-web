import React, { Component } from 'react'
import Bg from '../../components/Bg/index'
import LoginComponent from '../../components/login'
import { inject, observer } from 'mobx-react';
import $z from 'z-formatter'
import Toast from '../../components/Toast'
import './index.scss'

@inject('store')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.loginMoudle = this.props.store.loginMoudle
  }

  @LoginComponent
  login = () => {
    this.LoginComponent.show()
  }

  componentDidMount() {
    const cookie = $z.getCookie('uuid')
    if (cookie) {
      this.loginMoudle.uuidLogin()
    }
  }

  @LoginComponent
  register = () => {
    this.LoginComponent.show('register')
  }

  logout = () => {
    this.loginMoudle.logout().then(res => {
      Toast.info(res.msg)
    })
  }
  render() {
    return (
      <div className='home-box'>
        <Bg></Bg>
        <div className="home">
          <p className="slogan web-font">路漫漫其修远兮，吾将上下而求索。</p>
          <div className="center">
            <a className="article button full" target="_blank" href="https://jzenzhang.gitee.io/">博客</a>
            <a className="button full" target="_blank" href="https://www.notion.so/Note-339aa042c57d4ed98d873ce4b0a9e149">笔记</a>
            <a className="button full" target="_blank" href="https://codepen.io/jzenzhang/pens/public">codePen</a>
            <nav className="nav">
              {
                this.loginMoudle.loginStatus ?
                  <div>欢迎！<i>{this.loginMoudle.userInfo.userName}</i> <span onClick={this.logout} className="login a" data-size="small">退出</span></div> :
                  <div>
                    <span onClick={this.register} className="login a" data-size="small">创建用户</span>
                    <span onClick={this.login} className="login a" data-size="small">登录</span>
                  </div>
              }
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default Home