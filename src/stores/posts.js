import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const usePostsStore = defineStore('posts', () => {
  const token = localStorage.getItem('mineToken')
  const posts = ref([])
  const total = ref(0)
  const next = ref('')
  const isReady = ref(false)

  async function getPosts(feedId) {
    let arg = ''
    if (feedId) {
      arg = `?feedId=${feedId}`
    }
    isReady.value = false
    const returnAPI = await axios.get(`${API_BASE_URL}/stream${arg}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    posts.value = returnAPI.data.items
    total.value = returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  async function getMorePosts() {
    isReady.value = false
    const returnAPI = await axios.get(this.next, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    posts.value = [...posts.value, ...returnAPI.data.items]

    total.value += returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  return { getPosts, getMorePosts, posts, total, next, isReady }
})
