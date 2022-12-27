<script setup>
import { onMounted, ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import Logo from '../components/logo.vue'

const email = ref('')
const password = ref('')
const usersStore = useUsersStore()

const router = useRouter()

async function onButtonClick(event) {
  await usersStore.newUser(email.value, password.value)
  console.log(email.value, password.value)
  router.push('/')
}

onMounted(() => {})
</script>

<template>
  <div class="signup">
    <Logo />
    <label for="email">Email:</label>
    <input type="text" v-model="email" required />
    <label for="password">Password:</label>
    <input type="password" v-model="password" required />
    <button type="button" @click="onButtonClick">Yay</button>
  </div>
</template>

<style scoped>
.signup {
  width: 100%;
}

button {
  width: 5%;
}

.fail {
  color: red;
}
</style>
