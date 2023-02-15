<script setup>
import { ref } from 'vue'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Header from '../components/header/Header.vue'

const isMenuShown = ref(false)

function onMenuClick() {
  isMenuShown.value = !isMenuShown.value
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

.show-menu {
  background-color: var(--surface-color);
  z-index: 2;
  top: 0rem;
  left: 0px;
}

/* .sidebar {
  transition: all;
} */
/* @media only screen and (max-width: 300px) {
  .page {
    background-color: deeppink;
    left: 0;
  }
  .sidebar {
    background-color: blue;
    position: absolute;
    left: -100%;
  }
} */
@media only screen and (max-width: 600px) {
  .page {
    /* background-color: yellow; */
    width: 100%;
  }
  /* .sidebar {
     background-color: blue; 
    position: absolute;
    left: -100%;
    top: 0;
  } */

  .show-menu {
    left: 0px;
    z-index: 2;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1000px) {
  .page {
    /* background-color: orange; */
    width: 100%;
  }

  .show-menu {
    top: 0rem;
    left: 0px;
    z-index: 2;
  }
}
/* @media only screen and (min-width: 1001px) {
  .page {
    background-color: violet;
  }
  .sidebar {
    background-color: blue;
  }
} */
</style>
