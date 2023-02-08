<script setup>
import { ref, computed, watch } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import { getColors } from '../utils/colors'
import TheLogo from '../components/logo/Logo.vue'
import InputText from '../components/InputText.vue'
import ConfirmButton from '../components/ConfirmButton.vue'
import FormBackground from '../components/form-background/FormBackground.vue'
import Loading from '../components/Loading/Loading.vue'

const email = ref('')
const password = ref('')
const usersStore = useUsersStore()
const hasError = computed(() => usersStore.hasError)
const isLoading = computed(() => usersStore.isLoading)

const router = useRouter()

const colors = getColors()
const darkTextColor = colors.darkTextColor
const primaryColor = colors.primaryColor

async function onButtonClick() {
  await usersStore.login(email.value, password.value)
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="signin">
    <FormBackground>
      <div class="wrapper">
        <TheLogo class="logo" linkName="signIn" />
        <form class="signin-form">
          <div class="loading" v-if="isLoading"><Loading /></div>
          <InputText
            class="input-text"
            :is-required="true"
            label="email"
            v-model="email"
            :focus="true"
          />
          <InputText
            class="input-text"
            :is-required="true"
            label="password"
            type="password"
            v-model="password"
          />
          <div class="fail" v-if="hasError">
            email or password are incorrect
          </div>
          <ConfirmButton
            class="go-button"
            label="login"
            @click="onButtonClick"
            :disabled="isLoading"
          />
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
.background {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 25%;
}
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
  width: 100%;
}

.signin-form {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
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
  background-color: v-bind('darkTextColor');
  cursor: none;
}

.fail {
  color: v-bind('primaryColor');
  position: relative;
  width: 100%;
  text-align: center;
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
</style>
