<script setup>
import { ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import Logo from '../components/logo.vue'

let email = ref('willian87@gmail.com')
let password = ref('12345')
let usersStore = useUsersStore()

const router = useRouter()

async function onButtonClick(event) {
  await usersStore.login(email.value, password.value)

  if (usersStore.token) {
    router.push(`/home`)
  } else {
    email.value = ''
    password.value = ''
  }
}
</script>

<template>
  <div class="signin">
    <Logo />
    <label for="email">Email:</label>
    <input type="text" v-model="email" required />
    <label for="password">Password:</label>
    <input type="password" v-model="password" required />
    <button type="button" @click="onButtonClick">Go!</button>
    <span class="fail" v-if="usersStore.token">Login failed</span>
  </div>
</template>

<style scoped>
.signin {
  width: 100%;
}

button {
  width: 5%;
}

.fail {
  color: red;
}
</style>
