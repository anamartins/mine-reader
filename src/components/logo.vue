<script setup>
const props = defineProps({
  linkName: { type: String, default: 'home' }
})
</script>

<template>
  <div class="logo">
    <h1><router-link :to="{ name: props.linkName }">mine</router-link></h1>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Inter';
  src: url(https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap);
  font-weight: 900;
}
.logo {
  font-family: 'Inter', sans-serif;
  font-size: 50px;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
  padding: 0;
}
a:hover {
  text-decoration: none;
}
</style>
