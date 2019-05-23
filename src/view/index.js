import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bg from '../components/HomePage/bg'
import LoginComponent from '../components/login'
import { inject, observer } from 'mobx-react';
import fetchApi from '../utils/fetch'
import './index.scss'

@inject('store')
@observer
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store.login
  }

  // @action changeUserName = (val) => {
  //   this.props.store.userInfo.userName = val;
  // }
  @LoginComponent
  login = () => {
    this.store.uuidLogin().then((res) => {
      if (!res.success) {
        this.LoginComponent.show()
      }
    })
  }
  logout = () => {
    this.store.logout()
  }
  render() {
    console.log(this);

    return (
      <div className='home'>
        <Bg></Bg>
        <div className="center">
          <button className="article button full">文章</button>
          <Link to="/about-me" className="about-me button"><button className="button full">关于我</button></Link>
          <nav className="nav">
            {
              this.store.loginStatus ? <div>欢迎！<i>{this.store.userInfo.userName}</i> <span onClick={this.logout} className="login a" data-size="small">退出</span></div> : <span onClick={this.login} className="login a" data-size="small">登录</span>
            }
          </nav>
        </div>
      </div>
    )
  }
}
export default HomePage