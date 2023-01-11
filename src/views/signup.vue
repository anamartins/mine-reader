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

async function onButtonClick() {
  await usersStore.newUser(email.value, password.value)
  router.push('/')
}

onMounted(() => {})
</script>

<template>
  <div class="signup">
    <Logo linkName="signUp" />
    <form>
      <InputText
        class="input"
        :is-required="true"
        :focus="true"
        label="Email"
        v-model="email"
      />
      <InputText
        class="input"
        :is-required="true"
        label="Password"
        type="password"
        v-model="password"
      />
      <button type="button" @click="onButtonClick">Sign me up!</button>
    </form>
  </div>
</template>

<style scoped>
.signup {
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
  /* width: auto ; */
  position: relative;
  justify-self: center;
  padding: 5% 10%;
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
