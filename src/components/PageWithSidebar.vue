<script setup>
import { ref } from 'vue'
import vClickOutside from '../directives/vClickOutside'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Header from '../components/header/Header.vue'

const isMenuShown = ref(false)

function onMenuClick() {
  isMenuShown.value = !isMenuShown.value
}

function onSidebarClickOutside() {
  console.log('heeeeeey')
  if (isMenuShown.value) isMenuShown.value = false
}
</script>
<template>
  <div class="page">
    <Header
      class="header"
      @on-menu-click="onMenuClick"
      :isMenuOpen="isMenuShown"
    ></Header>
    <div class="content">
      <Sidebar
        :class="{ 'show-menu': isMenuShown }"
        @on-link-click="onMenuClick"
      />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  width: 100%;
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

@media only screen and (max-width: 1000px) {
  .show-menu {
    background-color: var(--surface-color);
    z-index: 2;
    top: 2rem;
    left: 0;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3),
      0 0.5rem 0.8rem rgba(0, 0, 0, 0.22);
  }
}
</style>
