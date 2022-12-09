import { defineStore } from 'pinia'
import axios from 'axios'
import { useUsersStore } from '../stores/users'
import { ref, computed } from 'vue'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const useFeedsStore = defineStore('feeds', () => {
  // const feeds = ref('[]')
  // const total = ref(0)
  // const readLater = ref(0)

  // let feeds = computed(() => feedsStore.feeds)

  const user = useUsersStore()
  // const token = user.token.value
  const token = localStorage.getItem('mineToken')

  async function followNewFeed(url) {
    const returnAPI = await axios.post(
      `${API_BASE_URL}/feed/follow`,
      { url: url },
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )
  }

  async function getFeeds() {
    const returnAPI = await axios.get(`${API_BASE_URL}/user/feeds`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })

    this.feeds = returnAPI.data.feeds
    this.total = returnAPI.data.total
    this.readLater = returnAPI.data.readLater

    // feeds = returnAPI.data.feeds
    // total = returnAPI.data.total
    // readLater = returnAPI.data.readLater
  }

  async function removeFeed(name) {
    const element = this.feeds.find((element) => element.title === name.value)
    const url = element.url

    const returnAPI = await axios.post(
      `${API_BASE_URL}/feed/unfollow`,
      { url: url },
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      }
    )
  }

  return { getFeeds, followNewFeed, removeFeed }
})
