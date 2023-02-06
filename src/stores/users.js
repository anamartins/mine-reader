import { defineStore } from 'pinia'
// import axios from 'axios'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useUsersStore = defineStore('users', () => {
  const user = ref({ email: '' })
  const token = ref('')
  const isLoading = ref(false)
  const hasError = ref(false)
  const { getApi, postApi } = useApi()

  async function login(email, password) {
    try {
      isLoading.value = true
      const returnAPI = await postApi(`auth/sign-in`, {
        email: email,
        password: password
      })
      token.value = returnAPI.data.token
      localStorage.setItem('mineToken', token.value)
    } catch (error) {
      console.log(error)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }

  async function getUser() {
    try {
      isLoading.value = true
      const returnAPI = await getApi(`user/me`)
      user.value.email = returnAPI.data.email
    } catch (error) {
      //todo
      console.log('show an error message', error)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }

  async function newUser(username, email, password) {
    try {
      isLoading.value = true
      const returnAPI = await postApi(`auth/sign-up`, {
        username,
        email,
        password
      })
    } catch (error) {
      console.log(error)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }

  async function confirmEmail(token) {
    try {
      isLoading.value = true
      const returnAPI = await postApi(`auth/confirm-email`, {
        token
      })
      console.log('returnAPI', returnAPI)
    } catch (error) {
      console.log(error)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    //actions
    login,
    getUser,
    newUser,
    confirmEmail,
    //state
    user,
    token,
    isLoading,
    hasError
  }
})
