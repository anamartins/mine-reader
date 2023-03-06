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

  function sortFeeds() {
    feeds.value.sort(function (a, b) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    })
  }

  function getFeedById(id) {
    return feeds.value.find((e) => {
      return e.feedId === id
    })
  }

  async function followNewFeed(url) {
    try {
      isLoading.value = true
      await postApi(`feed/follow`, { url: url })
      getFeeds()
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
      searchList.value = []
    }
  }

  async function removeFeed(id) {
    const element = feeds.value.find((e) => e.feedId === id)
    const url = element.url
    await postApi(`feed/unfollow`, { url: url })
    feeds.value = feeds.value.filter((e) => e.feedId !== id)
  }

  async function getFeeds() {
    try {
      isLoading.value = true
      const returnAPI = await getApi(`user/feeds`, {})
      feeds.value = returnAPI.data.feeds
      sortFeeds()
      total.value = returnAPI.data.total
      readLater.value = returnAPI.data.readLater
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function searchFeed(query) {
    if (!query) return
    try {
      isLoading.value = true
      const returnAPI = await getApi(`feed/search?query=${query}`)
      searchList.value = returnAPI.data.feeds
    } catch {
      console.log(error) //todo: handle errors in user level.
    } finally {
      isLoading.value = false
    }
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
