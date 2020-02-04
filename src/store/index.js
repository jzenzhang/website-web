import Login from './moudles/login';
import Chat from './moudles/chat'

const store = {
  loginModule: new Login(),
  chatModule: new Chat()
}

export default store