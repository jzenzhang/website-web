import React, { PureComponent } from 'react'

class Login extends PureComponent {
  render() {
    return (
      <div className="login">
        <p>用户名:</p>
        <input className="input"></input>
        <p>密码:</p>
        <input className="input"></input>
        <div>
          <p>确认密码:</p>
          <input className="input"></input>
        </div>
        <button className="button full" data-size="small">确认登录</button>
        <button className="button full" data-size="small" onClick={this.props.cancel}>取消</button>
        <p className="tag"><i>*未注册的用户将自动注册登录</i></p>
      </div>
    )
  }
}

export default Login