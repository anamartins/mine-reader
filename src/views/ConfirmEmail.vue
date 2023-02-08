<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useUsersStore } from '../stores/users'
import FormBackground from '../components/form-background/FormBackground.vue'

const route = useRoute()

const usersStore = useUsersStore()
const hasError = computed(() => usersStore.hasError)

onMounted(() => {
  const token = route.query.token
  usersStore.confirmEmail(token)
})
</script>

<template>
  <div class="confirmation">
    <FormBackground>
      <div class="wrapper">
        <div class="message" v-if="!hasError">
          Yay, your email was activated!
          <div class="link">
            <router-link :to="{ name: 'signIn' }">
              -> now go and sign in!
            </router-link>
          </div>
        </div>
        <div class="message error" v-else>
          Something weird happened. Can you try again later?
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
.confirmation {
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
</style>
