import { action, extendObservable } from 'mobx';
import fetchApi from '../../utils/fetch'

class Chat {
    constructor() {
        extendObservable(this, {
            chatList: []
        })
    }

    @action submit = (data) => {
        return new Promise((resolve) => {
            fetchApi('/api/chat', {
                data
            }).then(res => {
                resolve(res)
            })
        })
    }
    @action changeChatList = (data) => {
        this.chatList.push(data)
    }
}
export default Chat