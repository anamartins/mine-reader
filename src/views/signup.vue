<script setup>
import { onMounted, ref, computed } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import TheLogo from '../components/logo/Logo.vue'
import InputText from '../components/InputText.vue'
import ConfirmButton from '../components/ConfirmButton.vue'
import FormBackground from '../components/form-background/FormBackground.vue'

const email = ref('')
const password = ref('')

const usersStore = useUsersStore()
const hasError = computed(() => usersStore.hasError)
const isLoading = computed(() => usersStore.isLoading)

const router = useRouter()

async function onButtonClick() {
  await usersStore.newUser(email.value, password.value)
  router.push({ name: 'signIn' })
}

onMounted(() => {})
</script>

<template>
  <div class="signup">
    <FormBackground>
      <div class="wrapper">
        <div class="loading" v-if="isLoading">Loading</div>

        <TheLogo class="logo" linkName="signUp" />
        <form class="signup-form">
          <InputText
            class="input-text"
            :is-required="true"
            :focus="true"
            label="email"
            v-model="email"
          />
          <InputText
            class="input-text"
            :is-required="true"
            label="password"
            type="password"
            v-model="password"
          />
          <div class="fail" v-if="hasError">
            something weird happened. can you try again?
          </div>
          <ConfirmButton
            class="go-button"
            label="Sign me up!"
            @click="onButtonClick"
          />
        </form>
        <div class="link">
          <router-link :to="{ name: 'signIn' }">
            -> i already have an account!
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

.link {
  width: 100%;
  position: relative;
  text-align: center;
}
/* .loading {
  background-color: deeppink;
} */
</style>
