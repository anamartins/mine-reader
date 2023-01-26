<script setup>
import { onMounted, ref } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'
import TheLogo from '../components/Logo.vue'
import InputText from '../components/InputText.vue'
import ConfirmButton from '../components/ConfirmButton.vue'
import AnimatedBox from '../components/AnimatedBox.vue'

const email = ref('')
const password = ref('')

const usersStore = useUsersStore()

const router = useRouter()

async function onButtonClick() {
  await usersStore.newUser(email.value, password.value)
  router.push({ name: 'signIn' })
}

onMounted(() => {})
</script>

<template>
  <div class="signup">
    <AnimatedBox color="#c2185b" border-color="#c2185b" z="5" />
    <AnimatedBox color="#fa5788" z="4" />
    <AnimatedBox color="#4a148c" z="3" />
    <AnimatedBox color="#7c43bd" z="2" />
    <AnimatedBox border-color="#333" z="1" />
    <AnimatedBox color="#ffffff" opacity="1" class="main-box" z="0" />
    <div class="wrapper">
      <TheLogo class="logo" linkName="signUp" />
      <form class="signup-form">
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
        <ConfirmButton label="Sign me up!" @click="onButtonClick" />
      </form>
    </div>
  </div>
</template>

<style scoped>
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
}
.main-box {
  min-width: 500px;
  max-width: 800px;
  min-height: 500px;
  max-height: 700px;
}

.signup-form {
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
