<script setup>
import { useUsersStore } from '../../stores/users'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user
const isLoading = computed(() => usersStore.isLoading)

function onSignOut(e) {
  localStorage.removeItem('mineToken')
  router.push({ name: 'signIn' })
}
</script>

<template>
  <div class="profile-card-wrapper">
    <div class="loading" v-if="isLoading">Loading</div>
    <div class="user-data">
      <router-link :to="{ name: 'profile' }">{{ user.email }}</router-link>
    </div>

    <button class="classic-button" type="button" @click="onSignOut">
      Sign out
    </button>
  </div>
</template>

<style scoped>
.profile-card-wrapper {
  width: 100%;
  max-width: 300px;
  padding: 1%;
  background-color: #ccc;
}

.user-data {
  font-size: 15px;
  margin: 1% 0;
}

.classic-button {
  display: block;
  margin: 5% 0px 0px 0px;
  padding: 5px 10px;
}
</style>
