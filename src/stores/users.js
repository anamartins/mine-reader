import { defineStore } from 'pinia'
// import axios from 'axios'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useUsersStore = defineStore('users', () => {
  const user = ref({ email: '' })
  const token = ref('')
  const isLoading = ref(false)
  const { getApi, postApi } = useApi()

  async function login(email, password) {
    const returnAPI = await postApi(`auth/sign-in`, {
      email: email,
      password: password
    })
    token.value = returnAPI.data.token
    localStorage.setItem('mineToken', token.value)
  }

  async function getUser() {
    try {
      isLoading.value = true
      const returnAPI = await getApi(`user/me`)
      user.value.email = returnAPI.data.email
    } catch (error) {
      //todo
      console.log('show an error message', error)
    } finally {
      isLoading.value = false
    }
  }

  async function newUser(email, password) {
    try {
      isLoading.value = true
      const returnAPI = await postApi(`auth/sign-up`, {
        email: email,
        password: password
      })
    } catch (error) {
      //todo
      console.log('show an error message', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    //actions
    login,
    getUser,
    newUser,
    //state
    user,
    token,
    isLoading
  }
})
