import axios from 'axios'
export function useApi() {
  const API_BASE_URL = 'https://api-mqf5kfu3ba-ez.a.run.app'

  // const API_BASE_URL =
  //   'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

  async function getApi(url, params) {
    const token = localStorage.getItem('mineToken')
    const isUrlComplete = url.slice(0, 8) === 'https://'

    if (!isUrlComplete) {
      url = `${API_BASE_URL}/${url}`
    }

    return axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }
  async function postApi(url, data) {
    const token = localStorage.getItem('mineToken')
    return axios.post(`${API_BASE_URL}/${url}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  async function deleteApi(url) {
    const token = localStorage.getItem('mineToken')
    return axios.delete(`${API_BASE_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  return { getApi, postApi, deleteApi }
}
