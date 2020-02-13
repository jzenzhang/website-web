import { action, extendObservable } from 'mobx'
import fetchApi from '../../utils/fetch'

class Ncov {
  constructor() {
    extendObservable(this, {

    })
  }

  @action
  ncovCity = (data) => {
    return new Promise((resolve) => {
      fetchApi('/api/ncovCity', {
        data
      }).then(res => {
        resolve(JSON.parse(res.data.body).newslist)
      })
    })
  }
}
export default Ncov