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
  // const post = usePostsStore()
  const token = localStorage.getItem('mineToken')

  async function getPosts(feedId) {
    //   const returnAPI = await axios.get(
    //     `${API_BASE_URL}/stream?feedId=Y7TumbMa9YQdMXBJTP2k`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       },
    //       withCredentials: true
    //     }
    //   )
    //   this.posts = returnAPI.data.items
    //   this.total = returnAPI.data.total
    // }

    let arg = ''
    if (feedId) {
      arg = `?feedId = ${feedId}`
    }

    const returnAPI = await axios.get(`${API_BASE_URL}/stream${arg}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
    this.posts = returnAPI.data.items
    this.total = returnAPI.data.total
  }

  return { getPosts }
})
