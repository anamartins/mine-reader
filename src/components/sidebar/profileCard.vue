<script setup>
import { useUsersStore } from '../../stores/users'
import { useRouter } from 'vue-router'

const router = useRouter()
const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user

function onSignOut(e) {
  localStorage.removeItem('mineToken')
  router.push('/')
}
</script>

<template>
  <div class="profile-card">
    <div class="user-data">
      <router-link :to="{ name: 'profile' }">{{ user.email }}</router-link>
    </div>

    <button type="button" @click="onSignOut">Sign out</button>
  </div>
</template>

<style scoped>
.profile-card {
  width: 15%;
  padding: 2%;
  background-color: #ccc;
}

.user-data {
  font-size: 15px;
  margin: 1% 0;
}

button {
  display: block;
  margin: 5% 0px 0px 0px;
  padding: 5px 10px;
}
</style>
