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
  const { getApi, postApi, deleteApi } = useApi()

  const feedsStore = useFeedsStore()

  async function fetchPosts(url) {
    const returnAPI = await getApi(url)
    posts.value = returnAPI.data.items
    total.value = returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  function getPosts({ feedId, isReadLater, isOnlyUnread }) {
    let arg = '?'
    if (feedId) {
      arg += `feedId=${feedId}`
    }

    if (isOnlyUnread) {
      arg += `&isRead=false`
    }

    arg += `&isReadLater=${isReadLater}`
    isReady.value = false
    fetchPosts(`${API_BASE_URL}/stream${arg}`)
  }

  async function getMorePosts() {
    isReady.value = false
    const returnAPI = await getApi(next.value)
    posts.value = [...posts.value, ...returnAPI.data.items]
    total.value += returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  async function markPostAsRead(id, feedId, isRead) {
    const feed = await feedsStore.getFeedById(feedId)
    if (isRead) {
      await postApi(`${API_BASE_URL}/stream/${id}/is-read`, null)
      feed.unread--
      feedsStore.total--
    } else {
      await deleteApi(`${API_BASE_URL}/stream/${id}/is-read`)
      feed.unread++
      feedsStore.total++
    }
  }

  async function readPostLater(id, isReadLater) {
    isReady.value = false
    if (isReadLater) {
      await postApi(`${API_BASE_URL}/stream/${id}/read-later`, null)
      feedsStore.readLater++
    } else {
      await deleteApi(`${API_BASE_URL}/stream/${id}/read-later`)
      feedsStore.readLater--
    }
  }

  return {
    //actions (function)
    getPosts,
    getMorePosts,
    markPostAsRead,
    readPostLater,
    //state (ref)
    posts,
    total,
    next,
    isReady,
    //getter (computed)
    hasNext
  }
})
