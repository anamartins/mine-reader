<script setup>
import Sidebar from '../components/sidebar/Sidebar.vue'
import { useUsersStore } from '../stores/users'

const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user
</script>

<template>
  <Sidebar />
  <div class="profile">
    <h1>your profile</h1>
    {{ user.email }}
  </div>
</template>

<style scoped>
.profile {
  position: relative;
  width: 70%;
}
</style>
