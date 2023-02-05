import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useFeedsStore = defineStore('feeds', () => {
  const feeds = ref([])
  const searchList = ref([])
  const total = ref(0)
  const readLater = ref(0)
  const isLoading = ref(false)
  const { getApi, postApi } = useApi()

  function getFeedById(id) {
    return feeds.value.find((e) => {
      return e.feedId === id
    })
  }

  async function followNewFeed(url) {
    await postApi(`feed/follow`, { url: url })
    getFeeds()
  }

  async function removeFeed(id) {
    const element = feeds.value.find((e) => e.feedId === id)
    const url = element.url
    await postApi(`feed/unfollow`, { url: url })
  }

  async function getFeeds() {
    try {
      isLoading.value = true
      const returnAPI = await getApi(`user/feeds`, {})
      feeds.value = returnAPI.data.feeds
      total.value = returnAPI.data.total
      readLater.value = returnAPI.data.readLater
    } catch (error) {
      //todo
      console.log('show an error message', error)
    } finally {
      isLoading.value = false
    }
  }

  async function searchFeed(query) {
    const returnAPI = await getApi(`feed/search?query=${query}`)
    searchList.value = returnAPI.data.feeds
  }

  return {
    //actions
    getFeeds,
    getFeedById,
    followNewFeed,
    removeFeed,
    searchFeed,
    //ref
    feeds,
    total,
    readLater,
    isLoading,
    searchList
  }
})
