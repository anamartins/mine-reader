import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: { email: '' },
    token: ''
  }),
  actions: {
    async login(email, password) {
      try {
        const returnAPI = await axios.post(
          `${API_BASE_URL}/auth/sign-in`,
          {
            email: email,
            password: password
          },
          { withCredentials: true }
        )
        this.token = returnAPI.data.token
      } catch (error) {
        console.log(error)
        this.token = ''
      }
      localStorage.setItem('mineToken', this.token)
    }
  }
})
