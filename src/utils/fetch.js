import Toast from '../components/Toast'

function fetchApi(url, option) {
  return fetch(url, {
    method: option.method || 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(option.data),
    credentials: "include"
  }).then(res => {
    if (res.status !== 200) {
      Toast.error(res.json().msg)
      return Promise.reject()
    }
    return Promise.resolve(res.json())
  }).then(res => {
    if (!res.success) {
      Toast.error(res.msg)
    }
    return Promise.resolve(res)
  }).catch();
}

export default fetchApi