import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useFeedsStore = defineStore('feeds', () => {
  const feeds = ref([])
  const total = ref(0)
  const readLater = ref(0)
  const { getApi, postApi } = useApi()

  async function getFeedById(id) {
    return feeds.value.find((e, index) => {
      return e.feedId === id
    })
  }

  async function followNewFeed(url) {
    await postApi(`feed/follow`, { url: url })
    getFeeds()
  }

  async function removeFeed(name) {
    const element = feeds.value.find((element) => element.title === name.value)
    const url = element.url
    await postApi(`feed/unfollow`, { url: url })
  }

  async function getFeeds() {
    const returnAPI = await getApi(`user/feeds`, {})
    feeds.value = returnAPI.data.feeds
    total.value = returnAPI.data.total
    readLater.value = returnAPI.data.readLater
  }

  return {
    //actions
    getFeeds,
    getFeedById,
    followNewFeed,
    removeFeed,
    //ref
    feeds,
    total,
    readLater
  }
})
