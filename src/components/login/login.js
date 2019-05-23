import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Login extends Component {
  constructor(props) {
    super(props)
    this.store = this.props.store.login
    this.state = {
      userName: '',
      password: ''
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

  login = () => {
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
        <p>用户名:</p>
        <input value={this.state.userName} onChange={this.userNameChange} className="input"></input>
        <p>密码:</p>
        <input type="password" value={this.state.password} onChange={this.passwordChange} className="input"></input>
        {/* <div>
          <p>确认密码:</p>
          <input className="input"></input>
        </div> */}
        <button onClick={this.login} className="button full" data-size="small">确认登录</button>
        <button className="button full" data-size="small" onClick={this.props.cancel}>取消</button>
        <p className="tag"><i>*未注册的用户将自动注册登录</i></p>
      </div>
    )
  }
}

export default Login