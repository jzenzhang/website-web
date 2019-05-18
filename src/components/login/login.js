import React, { PureComponent } from 'react'

class Login extends PureComponent {
  constructor(props) {
    super(props)
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
        <button className="button full" data-size="small">确认登录</button>
        <button className="button full" data-size="small" onClick={this.props.cancel}>取消</button>
        <p className="tag"><i>*未注册的用户将自动注册登录</i></p>
      </div>
    )
  }
}

export default Login