import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Bg from '../components/HomePage/bg'
import './index.scss'

class HomePage extends PureComponent {
  login() {
    fetch('/api/user').then(res => {
      console.log(res);

    })
  }
  render() {
    return (
      <div className='home'>
        <Bg></Bg>
        <div className="center">
          <button className="article full">文章</button>
          <Link to="/aboutme" className="aboutme button"><button className="full">关于我</button></Link>
          <nav className="nav">
            <span onClick={this.login} className="login a">登录</span>
            <span className="register a">注册</span>
          </nav>
        </div>
      </div>
    )
  }
}
export default HomePage