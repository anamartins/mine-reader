<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import signupVue from './views/signup.vue';

</script>

<template>
  <main>
    <router-view :key="$route.path" />
  </main>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main{
  width: 100vw;
  height: 100vh;
  /* background-color: orange; */
}



</style>
