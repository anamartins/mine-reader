import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/api'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const useFeedsStore = defineStore('feeds', () => {
  const feeds = ref([])
  const total = ref(0)
  const readLater = ref(0)
  const { getApi, postApi } = useApi()

  async function followNewFeed(url) {
    await postApi(`${API_BASE_URL}/feed/follow`, { url: url })
  }

  async function removeFeed(name) {
    const element = this.feeds.find((element) => element.title === name.value)
    const url = element.url
    await postApi(`${API_BASE_URL}/feed/unfollow`, { url: url })
  }

  async function getFeeds() {
    const returnAPI = await getApi(`${API_BASE_URL}/user/feeds`)
    feeds.value = returnAPI.data.feeds
    total.value = returnAPI.data.total
    readLater.value = returnAPI.data.readLater
  }

  return {
    //actions
    getFeeds,
    followNewFeed,
    removeFeed,
    //ref
    feeds,
    total,
    readLater
  }
})
