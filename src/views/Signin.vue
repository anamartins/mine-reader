<script setup>
import { ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import TheLogo from '../components/Logo.vue'
import InputText from '../components/InputText.vue'
import ConfirmButton from '../components/ConfirmButton.vue'
import AnimatedBox from '../components/AnimatedBox.vue'

const email = ref('anacarolcm@gmail.com')
const password = ref('12345')
const usersStore = useUsersStore()
const hasError = ref(false)

const router = useRouter()

async function onButtonClick() {
  try {
    await usersStore.login(email.value, password.value)
    router.push({ name: 'home' })
  } catch (error) {
    hasError.value = true
    email.value = ''
    password.value = ''
  }
}
</script>

<template>
  <div class="signin">
    <AnimatedBox color="#c2185b" border-color="#c2185b" z="5" />
    <AnimatedBox color="#fa5788" z="4" />
    <AnimatedBox color="#4a148c" z="3" />
    <AnimatedBox color="#7c43bd" z="2" />
    <AnimatedBox border-color="#333" z="1" />
    <AnimatedBox color="#ffffff" opacity="1" class="main-box" z="0" />
    <div class="wrapper">
      <TheLogo class="logo" linkName="signIn" />
      <form class="signin-form">
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
        <div class="fail" v-if="hasError">Login failed</div>
        <ConfirmButton label="Go!" @click="onButtonClick" />
      </form>
      <div class="link">
        <router-link :to="{ name: 'signUp' }">
          -> new user? create an account
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.signin {
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
}

.main-box {
  min-width: 500px;
  max-width: 800px;
  min-height: 500px;
  max-height: 700px;
}
.signin-form {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.logo {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.input {
  width: 65%;
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
