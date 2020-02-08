import React from 'react'
import cs from 'classnames'
import { inject, observer } from 'mobx-react';
import styles from './index.module.scss'
import LoginComponent from '../../components/login'
import Toast from '../../components/Toast'
import homeIcon from '../../asset/favicon.png'

@inject('store')
@observer
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.loginModule = this.props.store.loginModule
    this.state = {}
  }
  @LoginComponent
  register = () => {
    this.LoginComponent.show('register')
  }
  @LoginComponent
  login = () => {
    this.LoginComponent.show()
  }
  logout = () => {
    this.loginModule.logout().then(res => {
      Toast.info(res.msg)
    })
  }
  goHome = () => {
    // console.log(this.props);
    
    this.props.history.push('/')
  }
  render() {
    return (
      <div className={cs(styles.nav_wrap, this.props.className ? this.props.className : null)}>
        <img className={styles.home_icon} src={homeIcon} alt="home" onClick={this.goHome}></img>
        <div className={styles.container}>
          <a className="article button full" target="_blank" rel="noopener noreferrer" href="https://jzenzhang.gitee.io/">博客</a>
          <a className="button full" target="_blank" rel="noopener noreferrer" href="https://www.notion.so/Note-339aa042c57d4ed98d873ce4b0a9e149">笔记</a>
          <a className="button full" target="_blank" rel="noopener noreferrer" href="https://codepen.io/jzenzhang/pens/public">codePen</a>
          {
            this.loginModule.loginStatus ?
              <div>欢迎！<i>{this.loginModule.userInfo.userName}</i> <a href onClick={this.logout} className="login a" data-size="small">退出</a></div> :
              <div>
                <a href onClick={this.register} data-size="small">创建用户</a>
                <a href onClick={this.login} data-size="small">登录</a>
              </div>
          }
        </div>
      </div>
    )
  }
}
export default Nav