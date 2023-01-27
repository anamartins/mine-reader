<script setup>
import { ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import TheLogo from '../components/logo/Logo.vue'
import InputText from '../components/InputText.vue'
import ConfirmButton from '../components/ConfirmButton.vue'
import FormBackground from '../components/form-background/FormBackground.vue'

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
    <FormBackground>
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
    </FormBackground>
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
