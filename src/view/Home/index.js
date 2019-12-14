import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    this.store = this.props.store.login
  }

  @LoginComponent
  login = () => {
    this.LoginComponent.show()
  }

  componentDidMount() {
    const cookie = $z.getCookie('uuid')
    if (cookie) {
      this.store.uuidLogin()
    }
  }

  @LoginComponent
  register = () => {
    this.LoginComponent.show('register')
  }
  logout = () => {
    this.store.logout().then(res => {
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
            <a className="button full" target="_blank" href="https://www.notion.so/jzen/8445d260d65d4722b29a5ccfa36fede4">笔记</a>
            <nav className="nav">
              {
                this.store.loginStatus ?
                  <div>欢迎！<i>{this.store.userInfo.userName}</i> <span onClick={this.logout} className="login a" data-size="small">退出</span></div> :
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