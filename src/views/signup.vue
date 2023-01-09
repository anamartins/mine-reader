<script setup>
import { onMounted, ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import Logo from '../components/logo.vue'
import InputText from '../components/inputText.vue'

const email = ref('')
const password = ref('')
const usersStore = useUsersStore()

const router = useRouter()

async function onButtonClick(event) {
  await usersStore.newUser(email.value, password.value)
  router.push('/')
}

onMounted(() => {})
</script>

<template>
  <div class="signup">
    <Logo />
    <InputText
      :is-required="true"
      :focus="true"
      label="Email"
      v-model="email"
    />
    <InputText
      :is-required="true"
      label="Password"
      type="password"
      v-model="password"
    />
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
