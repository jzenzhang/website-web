import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import cs from 'classnames'
import './login.scss'
@inject('store')
@observer
class Login extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store.login
    this.state = {
      userName: '',
      password: '',
      checkStatus: true,
      confirmPassword: true
    }
  }
  userNameChange = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  passwordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  rewritePasswordChange = (e) => {
    this.setState({
      rewritePassword: e.target.value
    })
  }

  checkName = () => {
    return this.store.checkName({
      userName: this.state.userName
    }).then(res => {
      this.setState({
        checkStatus: res.success
      })
      return Promise.resolve(res)
    })
  }

  confirmPassword = () => {
    this.setState({
      confirmPassword: this.state.password === this.state.rewritePassword
    })
  }

  async register() {
    var res = await this.checkName()
    if (!res.success) {
      return
    }
    this.confirmPassword()
    if (!this.state.checkStatus || !this.state.confirmPassword) return
    this.store.register({
      userName: this.state.userName,
      passWord: this.state.password
    }).then(res => {
      if (res.success) {
        this.props.cancel()
      }
    })
  }

  login = async () => {
    this.store.usernameLogin({
      userName: this.state.userName,
      passWord: this.state.password
    }).then((res) => {
      if (res.success) {
        this.props.cancel()
      }
    })
  }
  render() {
    return (
      <div className="login">
        <div className={cs({ 'username-info': !this.state.checkStatus })}>
          <p>用户名:</p>
          <input value={this.state.userName} onChange={this.userNameChange} className={cs('input', { username: !this.state.checkStatus })}></input>
        </div>
        <p>密码:</p>
        <input type="password" value={this.state.password} onChange={this.passwordChange} className="input"></input>
        {
          this.props.type === 'register' ?
            <div className={cs({ 'rewrite-password-info': !this.state.confirmPassword })}>
              <p>确认密码:</p>
              <input type="password" value={this.state.rewritePassword} onBlur={this.confirmPassword} onChange={this.rewritePasswordChange} className={cs('input', { 'rewrite-password': !this.state.confirmPassword })}></input>
            </div> : null
        }
        {
          this.props.type === 'register' ? <button type="button" onClick={this.register.bind(this)} className="button full" data-size="small">注册</button> :
            <button onClick={this.login} className="button full" data-size="small">确认登录</button>

        }
        <button className="button full" data-size="small" onClick={this.props.cancel}>取消</button>
      </div>
    )
  }
}

export default Login