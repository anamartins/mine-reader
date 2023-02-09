<script setup></script>

<template>
  <div class="all">
    <router-view />
  </div>
</template>

<style scoped>
.all {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
