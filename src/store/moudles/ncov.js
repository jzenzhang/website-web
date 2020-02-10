import { action, extendObservable } from 'mobx'
import fetchApi from '../../utils/fetch'

class Ncov {
  constructor() {
    extendObservable(this, {

    })
  }

  @action
  ncovCity = (data) => {
    return new Promise(() => {
      fetchApi('/api/ncovCity', {
        data
      }).then(res => {
        console.log(res);
      })
    })
  }
}
export default Ncov