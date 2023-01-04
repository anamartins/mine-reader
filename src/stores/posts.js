import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApi } from '../composables/api'
import { useFeedsStore } from '../stores/feeds'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const total = ref(0)
  const next = ref('')
  const isReady = ref(false)

  const hasNext = computed(() => !!next.value)
  const { getApi, postApi, deleteApi } = useApi()

  const feedsStore = useFeedsStore()

  async function fetchPosts(url, params) {
    const returnAPI = await getApi(url, params)
    posts.value = returnAPI.data.items
    total.value = returnAPI.data.total
    next.value = returnAPI.data.next
    isReady.value = true
  }

  function getPosts({ feedId, tag, isReadLater, isOnlyUnread }) {
    // let arg = '?'
    // if (feedId) {
    //   arg += `feedId=${feedId}`
    // }

    // if (tag) {
    //   arg += `tag=${tag}`
    // }

    // if (isOnlyUnread) {
    //   arg += `&isRead=false`
    // }

    const params = { feedId, tag, isReadLater, isRead: isOnlyUnread }
    // arg += `&isReadLater=${isReadLater}`
    isReady.value = false
    fetchPosts(`stream`, params)
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
      await postApi(`stream/${id}/is-read`, null)
      feed.unread--
      feedsStore.total--
    } else {
      await deleteApi(`stream/${id}/is-read`)
      feed.unread++
      feedsStore.total++
    }
  }

  async function readPostLater(id, isReadLater) {
    isReady.value = false
    if (isReadLater) {
      await postApi(`stream/${id}/read-later`, null)
      feedsStore.readLater++
    } else {
      await deleteApi(`stream/${id}/read-later`)
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
