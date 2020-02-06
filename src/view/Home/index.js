import React, { Component } from 'react'
import Bg from '../../components/Bg/index'
import LoginComponent from '../../components/login'
import { inject, observer } from 'mobx-react';
import $z from 'z-formatter'
import Toast from '../../components/Toast'
import './index.scss'

import { Dialog } from '../../components/index'
import { Button } from '../../components/index'

@inject('store')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.loginModule = this.props.store.loginModule
    this.state = {
      visbility: true
    }
  }

  @LoginComponent
  login = () => {
    this.LoginComponent.show()
  }

  componentDidMount() {
    const cookie = $z.getCookie('uuid')
    if (cookie) {
      this.loginModule.uuidLogin()
    }
  }

  @LoginComponent
  register = () => {
    this.LoginComponent.show('register')
  }

  logout = () => {
    this.loginModule.logout().then(res => {
      Toast.info(res.msg)
    })
  }

  a = (e) => {
    console.log(e);

  }

  render() {
    return (
      <div className='home-box'>
        <Bg></Bg>
        <div className="home">
          <p className="slogan web-font">路漫漫其修远兮，吾将上下而求索。</p>
          <Dialog visbility={this.state.visbility} onConfirm={e => this.a(e)}>
            <Button></Button>
          </Dialog>
          <div className="center">
            <a className="article button full" target="_blank" href="https://jzenzhang.gitee.io/">博客</a>
            <a className="button full" target="_blank" href="https://www.notion.so/Note-339aa042c57d4ed98d873ce4b0a9e149">笔记</a>
            <a className="button full" target="_blank" href="https://codepen.io/jzenzhang/pens/public">codePen</a>
            <nav className="nav">
              {
                this.loginModule.loginStatus ?
                  <div>欢迎！<i>{this.loginModule.userInfo.userName}</i> <span onClick={this.logout} className="login a" data-size="small">退出</span></div> :
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