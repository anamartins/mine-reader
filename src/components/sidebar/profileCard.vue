<script setup>
import { useUsersStore } from '../../stores/users'

const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user
</script>

<template>
  <div class="profile-card">{{ user.email }}</div>
  <router-link :to="{ name: 'profile' }">edit your profile</router-link>
</template>

<style scoped>
.profile-card {
  background-color: deeppink;
}
</style>
