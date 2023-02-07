import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApi } from '../composables/api'
import { useFeedsStore } from './feeds'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([])
  const total = ref(0)
  const next = ref('')
  const isReady = ref(false)
  // const isPostLoading = ref(false)

  const hasNext = computed(() => !!next.value)
  const { getApi, postApi, deleteApi } = useApi()

  const feedsStore = useFeedsStore()

  function getPostById(id) {
    return posts.value.find((e) => {
      return e.id === id
    })
  }

  async function getPosts(params) {
    try {
      isReady.value = false
      const returnAPI = await getApi('stream', params)
      posts.value = returnAPI.data.items
      total.value = returnAPI.data.total
      next.value = returnAPI.data.next
    } catch (error) {
      console.log(error)
    } finally {
      isReady.value = true
    }
  }

  async function getMorePosts() {
    try {
      isReady.value = false
      const returnAPI = await getApi(next.value)
      posts.value = [...posts.value, ...returnAPI.data.items]
      total.value += returnAPI.data.total
      next.value = returnAPI.data.next
    } catch (error) {
      //todo
      console.log(error)
    } finally {
      isReady.value = true
    }
  }

  async function markPostAsRead(id, feedId, isRead) {
    const post = getPostById(id)
    try {
      post.isMarkPostAsReadLoading = true
      const feed = feedsStore.getFeedById(feedId)
      if (isRead) {
        await postApi(`stream/${id}/is-read`, null)
        feed.unread--
        feedsStore.total--
      } else {
        await deleteApi(`stream/${id}/is-read`)
        feed.unread++
        feedsStore.total++
      }
    } catch (error) {
      console.log(error)
    } finally {
      post.isMarkPostAsReadLoading = false
    }
  }

  async function readPostLater(id, isReadLater) {
    const post = getPostById(id)
    try {
      post.isReadPostLaterLoading = true
      if (isReadLater) {
        await postApi(`stream/${id}/read-later`, null)
        feedsStore.readLater++
      } else {
        await deleteApi(`stream/${id}/read-later`)
        feedsStore.readLater--
      }
    } catch (error) {
      console.log(error)
    } finally {
      post.isReadPostLaterLoading = false
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
