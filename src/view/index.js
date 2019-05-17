import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Bg from '../components/HomePage/bg'
import LoginComponent from '../components/login'
import './index.scss'
@LoginComponent
class HomePage extends PureComponent {
  constructor(props) {
    super(props)
  }

  login = () => {
    this.Login.show()
    fetch('/api/user').then(res => {
      console.log(res);

    })
  }
  render() {
    return (
      <div className='home'>
        <Bg></Bg>
        <div className="center">
          <button className="article button full">文章</button>
          <Link to="/about-me" className="about-me button"><button className="button full">关于我</button></Link>
          <nav className="nav">
            <span onClick={this.login} className="login a" data-size="small">登录</span>
          </nav>
        </div>
      </div>
    )
  }
}
export default HomePage