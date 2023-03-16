<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useUsersStore } from '../stores/users'
import Logo from '../components/logo/Logo.vue'
import Loading from '../components/Loading/Loading.vue'
import InputText from '../components/InputText.vue'
import ConfirmButton from '../components/ConfirmButton.vue'
import SimpleButton from '../components/SimpleButton.vue'
import FormBackground from '../components/form-background/FormBackground.vue'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const isModalOpen = ref(false)

const usersStore = useUsersStore()
const hasError = computed(() => usersStore.hasError)
const isLoading = computed(() => usersStore.isLoading)

async function onFormSubmit() {
  await usersStore.newUser(username.value, email.value, password.value)
  username.value = ''
  email.value = ''
  password.value = ''
  isModalOpen.value = true
}

function onExitClick() {
  isModalOpen.value = false
}

function onButtonClick() {
  isModalOpen.value = false
  router.push({ name: 'signIn' })
}
</script>

<template>
  <div class="signup">
    <FormBackground>
      <div class="wrapper">
        <div class="loading" v-if="isLoading"><Loading /></div>

        <Logo class="logo" linkName="signUp" />
        <form class="signup-form" @submit.prevent="onFormSubmit">
          <InputText
            class="input-text"
            :is-required="true"
            :focus="true"
            label="your username"
            v-model="username"
          />
          <InputText
            class="input-text"
            :is-required="true"
            label="your good email"
            v-model="email"
          />
          <InputText
            class="input-text"
            :is-required="true"
            label="your password"
            type="password"
            v-model="password"
          />
          <div class="fail" v-if="hasError">
            something weird happened. could you try again?
          </div>

          <ConfirmButton class="go-button" label="Sign me up!" />
        </form>
        <div class="link">
          <router-link :to="{ name: 'signIn' }">
            -> i already have an account!
          </router-link>
        </div>
      </div>
      <div class="sucess-modal" v-if="isModalOpen">
        <div class="exit" @click="onExitClick">X</div>
        Nice! Now check your email; and confirm you email.
        <SimpleButton
          label="go to signin page"
          class="modal__button"
          @click="onButtonClick"
        />
      </div>
    </FormBackground>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 40%;
}
.signup {
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
  width: 100%;
}

.signup-form {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
}

.logo {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.input-text {
  width: 100%;
}
.go-button {
  width: 100%;
}
.go-button:disabled {
  background-color: #333;
  cursor: none;
}
.fail {
  color: red;
  position: relative;
  width: 100%;
  text-align: center;
}

.sucess-modal {
  background-color: var(--background-color);
  position: absolute;
  width: 50%;
  top: 30%;
  padding: 5rem 2rem;
  border: 1px solid #333;
}

.exit {
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0.5rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid #333;
  font-size: 1.5rem;
}

.link {
  width: 100%;
  position: relative;
  text-align: center;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
}

@media only screen and (max-width: 300px) {
  .background {
    width: 90%;
  }
}
@media only screen and (min-width: 301px) and (max-width: 600px) {
  .background {
    width: 75%;
  }
}
@media only screen and (min-width: 601px) and (max-width: 1000px) {
  .background {
    width: 60%;
  }
}
@media only screen and (min-width: 1001px) {
}
</style>
