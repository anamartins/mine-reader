import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

// export const usePostsStore = defineStore('posts', {
//   state: () => ({
//     posts: [],
//     total: 0
//   }),
//   actions: {
//     getPosts() {
//       const returnAPI = axios.get(`${API_BASE_URL}/stream`)
//     }

//     //  this.posts = returnAPI.items;
//     //  this.total = returnAPI.total;
//   }
// })

export const usePostsStore = defineStore('posts', () => {
  const token = localStorage.getItem('mineToken')

  async function getPosts(feedId) {
    let arg = ''
    if (feedId) {
      arg = `?feedId=${feedId}`
    }

    const returnAPI = await axios.get(`${API_BASE_URL}/stream${arg}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    this.posts = returnAPI.data.items
    this.total = returnAPI.data.total
    this.next = returnAPI.data.next
  }

  async function getMorePosts() {
    const returnAPI = await axios.get(this.next, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    this.posts = returnAPI.data.items
    this.total = returnAPI.data.total
    this.next = returnAPI.data.next
  }

  return { getPosts, getMorePosts }
})
