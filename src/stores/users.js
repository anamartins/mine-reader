import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import { useApi } from '../composables/api'

const API_BASE_URL =
  'https://us-central1-rss-reader-365617.cloudfunctions.net/api'

export const useUsersStore = defineStore('users', () => {
  const user = ref({ email: '' })
  const token = ref('')

  const { getApi, postApi } = useApi()

  async function login(email, password) {
    const returnAPI = await postApi(`${API_BASE_URL}/auth/sign-in`, {
      email: email,
      password: password
    })
    token.value = returnAPI.data.token
    localStorage.setItem('mineToken', token.value)
  }

  async function getUser() {
    const returnAPI = await getApi(`${API_BASE_URL}/user/me`)
    user.value.email = returnAPI.data.email
  }

  async function newUser(email, password) {
    const returnAPI = await postApi(`${API_BASE_URL}/auth/sign-up`, {
      email: email,
      password: password
    })
    console.log(returnAPI.data)
  }

  return {
    //actions
    login,
    getUser,
    newUser,
    //state
    user,
    token
  }
})
