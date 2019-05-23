import { action, extendObservable } from 'mobx';
import fetchApi from '../../utils/fetch'

class Login {
  constructor() {
    extendObservable(this, {
      loginStatus: false,
      userInfo: {
        userName: ''
      }
    })
  }

  @action uuidLogin = () => {
    return new Promise((resolve) => {
      fetchApi('/api/login/uuid', {}).then((res) => {
        if (res.success) {
          this.userInfo.userName = res.data.userName
          this.changeLogin(true)
        }
        resolve(res)
      })
    })
  }

  @action usernameLogin = (data) => {
    return new Promise((resolve) => {
      fetchApi('/api/login/username', {
        data
      }).then((res) => {
        if (res.success) {
          this.userInfo.userName = res.data.userName
          this.changeLogin(true)
        }
        resolve(res)
      })
    })

  }

  @action logout = () => {
    return new Promise((resolve) => {
      fetchApi('/api/logout', {}).then((res) => {
        if (res.success) {
          this.changeLogin(false)
        }
        resolve(res)
      })
    })

  }

  @action changeLogin(val) {
    this.loginStatus = val
  }
}
export default Login