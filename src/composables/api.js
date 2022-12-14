import axios from 'axios'
import { ref, computed } from 'vue'
export function useApi() {
  const API_BASE_URL =
    'https://us-central1-rss-reader-365617.cloudfunctions.net/api'
  const token = localStorage.getItem('mineToken')

  async function getApi(url) {
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  async function postApi(url) {
    return axios.post(url, null, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  }

  return { getApi, postApi }
}
