<script setup>
import { useUsersStore } from '../../stores/users'
import { useRouter } from 'vue-router'

const router = useRouter()
const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user
const token = localStorage.getItem('mineToken')

function onSignOut(e) {
  localStorage.removeItem('mineToken')
  router.push('/')
}
</script>

<template>
  <div class="profile-card">{{ user.email }}</div>
  <router-link :to="{ name: 'profile' }">edit your profile</router-link>
  <button type="button" @click="onSignOut">Sign out</button>
</template>

<style scoped>
.profile-card {
  background-color: deeppink;
  width: 100%;
}
</style>
