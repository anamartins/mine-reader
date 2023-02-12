<script setup>
import { getColors } from '../../utils/colors'
import Logo from '../logo/Logo.vue'
const colors = getColors()

const primaryColor = colors.primaryColor
const backgroundColor = colors.backgroundColor

const emit = defineEmits('onMenuClick')

function onMenuClick() {
  emit('onMenuClick')
}
</script>
<template>
  <header>
    <Logo font-size="1rem" :font-color="backgroundColor" has-animated-box />
    <div class="menu" @click="onMenuClick"></div>
  </header>
</template>
<style scoped lang="scss">
header {
  background-color: var(--surface-color);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1200px;
  height: 3rem;
  z-index: 1;
}

.menu {
  background-color: aqua;
  width: 4rem;
  height: 3rem;
  position: absolute;
  top: 0px;
  left: 0px;
  display: none;
  cursor: pointer;
}

@media only screen and (max-width: 300px) {
  header {
    left: 0;
  }
  .menu {
    display: block;
  }
}
@media only screen and (min-width: 301px) and (max-width: 600px) {
  header {
    left: 0;
  }

  .menu {
    display: block;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1000px) {
  .menu {
    display: block;
  }
  .header {
    left: 0;
    z-index: 2;
  }
}
</style>
