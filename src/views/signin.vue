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
    <Logo linkName="signIn" />
    <form>
      <InputText
        class="input"
        :is-required="true"
        label="email"
        v-model="email"
        :focus="true"
      />
      <InputText
        class="input"
        :is-required="true"
        label="password"
        type="password"
        v-model="password"
      />
      <div class="fail" v-if="usersStore.token">Login failed</div>
      <button type="button" @click="onButtonClick">Go!</button>
    </form>
    <div class="link">
      <router-link :to="{ name: 'signUp' }">
        -> new user? create an account
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.signin {
  min-width: calc(400px - 14%);
  max-width: calc(700px - 14%);
  min-height: calc(300px - 10%);
  max-height: calc(500px - 10%);
  padding: 8% 7%;
  border: 2px solid #ccc;
  border-radius: 1750px 1500px 750px 1000px;
  /* border-radius: 175% 150% 70% 125%; */

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
form {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}

.input {
  width: 65%;
}

button {
  width: 40%;
  position: relative;
  justify-self: center;
  padding: 5%;
  margin: 5% 0px;
  border: 0px;
  border-radius: 200px 250px 100px 150px;
  background-color: #ccc;
  font-size: 1.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #aaa;
  color: white;
}

.fail {
  color: red;
  position: relative;
  width: 100%;
  text-align: center;
}

.link {
  width: 60%;
  position: relative;
  text-align: center;
}
</style>
