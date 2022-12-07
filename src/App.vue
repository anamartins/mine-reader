<script setup></script>

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

main {
  width: 100vw;
  height: 100vh;
}
</style>
