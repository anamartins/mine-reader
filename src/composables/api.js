import axios from 'axios'
export function useApi() {
  const token = localStorage.getItem('mineToken')

  async function getApi(url) {
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }
  async function postApi(arg1, arg2) {
    console.log('postAPI', arg1, arg2)
    return axios.post(arg1, arg2, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  return { getApi, postApi }
}
