import { action, extendObservable } from 'mobx';
import fetchApi from '../../utils/fetch'

class Login {
  constructor() {
    extendObservable(this, {
      loginStatus: false,
      userInfo: {
        name: ''
      }
    })
  }

  @action register = (data) => {
    return new Promise((resolve) => {
      fetchApi('/api/register', {
        data
      }).then(res => {
        if (res.success) {
          this.userInfo = res.data
          this.changeLogin(true)
        }
        resolve(res)
      })
    })
  }

  @action checkId = (data) => {
    return new Promise((resolve) => {
      fetchApi('/api/login/checkId', {
        data
      }).then(res => {
        resolve(res)
      })
    })
  }

  @action uuidLogin = () => {
    return new Promise((resolve) => {
      fetchApi('/api/login/uuid', {}).then((res) => {
        if (res.success) {
          this.userInfo = res.data
          this.changeLogin(true)
        }
        resolve(res)
      })
    })
  }

  @action userIdLogin = (data) => {
    return new Promise((resolve) => {
      fetchApi('/api/login/userIdLogin', {
        data
      }).then((res) => {
        if (res.success) {
          this.userInfo = res.data
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