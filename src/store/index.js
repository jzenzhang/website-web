import Login from './moudles/login';
import Chat from './moudles/chat'
import Ncov from './moudles/ncov'
const store = {
  loginModule: new Login(),
  chatModule: new Chat(),
  ncovModule: new Ncov()
}

export default store