import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import cs from 'classnames'
import Toast from '../Toast'
import './login.scss'
import { observable } from 'mobx';

import { Button } from '../index'
// 注入store
@inject('store')
// 声明响应式组件
@observer
class Login extends Component {
  // 声明响应式属性
  @observable userInfo = {
    userName: '',
    password: '',
    checkStatus: true,
    rewritePassword: '',
    confirmPassword: true
  }

  constructor(props) {
    super(props)
    // 获取对应的store
    this.loginModule = this.props.store.loginModule
  }
  userNameChange = (e) => {
    this.userInfo.userName = e.target.value
  }
  passwordChange = (e) => {
    this.userInfo.password =  e.target.value
  }
  rewritePasswordChange = (e) => {
    this.userInfo.rewritePassword = e.target.value
  }

  checkName = () => {
    return this.loginModule.checkName({
      userName: this.userInfo.userName
    }).then(res => {
      this.userInfo.checkStatus = res.success
      return Promise.resolve(res)
    })
  }

  confirmPassword = () => {
    window.scroll(0, 0)
    this.userInfo.confirmPassword = this.userInfo.password === this.userInfo.rewritePassword
  }

   register = async () => {
    var res = await this.checkName()
    if (!res.success) {
      return
    }
    this.confirmPassword()
    if (!this.userInfo.checkStatus || !this.userInfo.confirmPassword) return
    this.loginModule.register({
      userName: this.userInfo.userName,
      passWord: this.userInfo.password
    }).then(res => {
      if (res.success) {
        Toast.info(res.msg)
        this.props.cancel()
      }
    })
  }
  reset = () => {
    window.scroll(0, 0)
  }
  login = () => {
    this.loginModule.usernameLogin({
      userName: this.userInfo.userName,
      passWord: this.userInfo.password
    }).then((res) => {
      if (res.success) {
        this.props.cancel()
        Toast.info(res.msg)
      }
    })
  }
  render() {
    return (
      <div className="login">
        <div className={cs({ 'username-info': !this.userInfo.checkStatus })}>
          <p>用户名:</p>
          <input value={this.userInfo.userName} onBlur={this.reset} onChange={this.userNameChange} className={cs('input', { username: !this.userInfo.checkStatus })}></input>
        </div>
        <p>密码:</p>
        <input type="password" value={this.userInfo.password} onBlur={this.reset} onChange={this.passwordChange} className="input"></input>
        {
          this.props.type === 'register' ?
            <div className={cs({ 'rewrite-password-info': !this.userInfo.confirmPassword })}>
              <p>确认密码:</p>
              <input type="password" value={this.userInfo.rewritePassword} onBlur={this.confirmPassword} onChange={this.rewritePasswordChange} className={cs('input', { 'rewrite-password': !this.userInfo.confirmPassword })}></input>
            </div> : null
        }
        <div>
          {
            this.props.type === 'register' ? <Button onClick={this.register}>注册</Button> :
              <Button onClick={this.login}>登录</Button>
          }
          <Button onClick={this.props.cancel}>取消</Button>
        </div>
      </div>
    )
  }
}

export default Login