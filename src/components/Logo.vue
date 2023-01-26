<script setup>
import AnimatedBox from './AnimatedBox.vue'
const props = defineProps({
  linkName: { type: String, required: false, default: 'home' }
})
</script>

<template>
  <div class="logo">
    <h1>
      <router-link class="logo-link" :to="{ name: props.linkName }"
        >mine</router-link
      >
    </h1>
  </div>
</template>

<style scoped>
.logo {
  font-family: 'Bree Serif', serif;
  font-size: 3rem;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
  padding: 0;
}
.logo-link,
.logo-link:hover {
  text-decoration: none;
}
</style>
