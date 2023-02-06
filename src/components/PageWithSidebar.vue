<script setup>
import Sidebar from '../components/sidebar/Sidebar.vue'
import Header from '../components/header/Header.vue'
</script>
<template>
  <div class="page">
    <Header class="header"></Header>
    <div class="content">
      <Sidebar class="sidebar" />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.content {
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 3rem;
}
</style>
