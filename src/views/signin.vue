<script setup>
import { ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import Logo from '../components/logo.vue'
import InputText from '../components/inputText.vue'

const email = ref('anacarolcm@gmail.com')
const password = ref('12345')
const usersStore = useUsersStore()

const router = useRouter()

async function onButtonClick() {
  await usersStore.login(email.value, password.value)

  if (usersStore.token) {
    router.push('/home')
  } else {
    email.value = ''
    password.value = ''
  }
}
</script>

<template>
  <div class="signin">
    <Logo />
    <form>
      <InputText :is-required="true" label="Email" v-model="email" />
      <InputText :is-required="true" label="Password" v-model="password" />
      <button type="button" @click="onButtonClick">Go!</button>
      <span class="fail" v-if="usersStore.token">Login failed</span>
      <router-link :to="{ name: 'signUp' }">
        new user? create an account
      </router-link>
    </form>
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
