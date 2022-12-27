import axios from 'axios'
export function useApi() {
  async function getApi(url) {
    const token = localStorage.getItem('mineToken')
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }
  async function postApi(url, data) {
    const token = localStorage.getItem('mineToken')
    return axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  async function deleteApi(url) {
    const token = localStorage.getItem('mineToken')
    return axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  return { getApi, postApi, deleteApi }
}
