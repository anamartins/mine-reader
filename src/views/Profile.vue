<script setup>
import PageWithSidebar from '../components/PageWithSidebar.vue'
import { useUsersStore } from '../stores/users'

const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user
</script>

<template>
  <PageWithSidebar>
    <div class="profile">
      <h1>your profile</h1>
      {{ user.email }}
    </div>
  </PageWithSidebar>
</template>

<style scoped>
.profile {
  position: relative;
  width: 70%;
}
</style>
