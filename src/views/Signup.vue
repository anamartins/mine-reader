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
    <AnimatedBox color="#c2185b" border-color="#c2185b" />

    <AnimatedBox color="#fa5788" />
    <AnimatedBox color="#4a148c" />
    <AnimatedBox color="#7c43bd" />
    <AnimatedBox border-color="#333" />
    <div class="wrapper">
      <div class="main-box">
        <TheLogo linkName="signUp" />
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
  </div>
</template>

<style scoped>
.signup {
  background-color: var(--background-color);
  /* position: relative; */
  /* overflow: hidden; */
}
.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  position: relative;
}
.main-box {
  min-width: calc(400px - 14%);
  max-width: calc(700px - 14%);
  min-height: calc(300px - 10%);
  max-height: calc(500px - 10%);
  padding: 8% 7%;
  border: 1px solid #ccc;
  border-radius: 1750px 1500px 750px 1000px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  background-color: var(--surface-color);
}

.signup-form {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
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
