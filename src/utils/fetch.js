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
      return Promise.reject()
    }
    return Promise.resolve(res.json())
  }).catch();
}

export default fetchApi