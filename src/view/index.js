import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bg from '../components/HomePage/bg'
import LoginComponent from '../components/login'
import { inject, observer } from 'mobx-react';
import $z from 'z-formatter'
import Toast from '../components/Toast'
import './index.scss'

@inject('store')
@observer
class HomePage extends Component {
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
            <button className="article button full">文章</button>
            <Link to="/about-me" className="about-me button"><button className="button full">关于我</button></Link>
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
export default HomePage