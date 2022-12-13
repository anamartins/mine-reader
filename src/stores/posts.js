import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const usePostsStore = defineStore('posts', () => {
  const token = localStorage.getItem('mineToken')
  const posts = ref([])
  const total = ref(0)
  const next = ref('')
  const isReady = ref(false)

  const hasNext = computed(() => !!next.value)

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
    const returnAPI = await axios.get(next.value, {
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

  async function getReadLaterPosts() {
    const returnAPI = await axios.get(
      `${API_BASE_URL}/stream?isReadLater=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )

    posts.value = returnAPI.data.items
    total.value = returnAPI.data.total
    next.value = returnAPI.data.next
    console.log(returnAPI.data.next)
    isReady.value = true
  }

  async function markPostAsRead(id) {
    const returnAPI = await axios.post(
      `${API_BASE_URL}/stream/${id}/is-read`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )

    total.value -= 1
    next.value = returnAPI.data.next
    isReady.value = true
  }

  async function readPostLater(id) {
    isReady.value = false
    const returnAPI = await axios.post(
      `${API_BASE_URL}/stream/${id}/read-later`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )
  }

  return {
    //actions (function)
    getPosts,
    getMorePosts,
    markPostAsRead,
    readPostLater,
    getReadLaterPosts,
    //state (ref)
    posts,
    total,
    next,
    isReady,
    //getter (computed)
    hasNext
  }
})
