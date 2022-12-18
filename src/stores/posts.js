import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApi } from '../composables/api'
import { useFeedsStore } from '../stores/feeds'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const total = ref(0)
  const next = ref('')
  const isReady = ref(false)

  const hasNext = computed(() => !!next.value)
  const { getApi, postApi } = useApi()

  const feedsStore = useFeedsStore()

  async function fetchPosts(url) {
    const returnAPI = await getApi(url)
    posts.value = returnAPI.data.items
    total.value = returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  function getPosts(feedId) {
    let arg = ''
    if (feedId) {
      arg = `?feedId=${feedId}`
    }
    isReady.value = false
    fetchPosts(`${API_BASE_URL}/stream${arg}`)
  }

  function getReadLaterPosts() {
    fetchPosts(`${API_BASE_URL}/stream?isReadLater=true`)
  }

  async function getMorePosts() {
    isReady.value = false
    const returnAPI = await getApi(next.value)
    posts.value = [...posts.value, ...returnAPI.data.items]
    total.value += returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  async function markPostAsRead(id, feedId) {
    const returnAPI = await postApi(
      `${API_BASE_URL}/stream/${id}/is-read`,
      null
    )
    const feed = await feedsStore.getFeedById(feedId)
    feed.unread--
    feedsStore.total--
  }

  async function readPostLater(id) {
    isReady.value = false
    await postApi(`${API_BASE_URL}/stream/${id}/read-later`, null)
    feedsStore.readLater++
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
