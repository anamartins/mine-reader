<script setup>
import { getColors } from '../../utils/colors'
import Logo from '../logo/Logo.vue'
const colors = getColors()

const primaryColor = colors.primaryColor
const backgroundColor = colors.backgroundColor
</script>
<template>
  <header>
    <Logo font-size="1rem" :font-color="backgroundColor" has-animated-box />
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
  max-width: 1500px;
  height: 3rem;
  z-index: 1;
}
.logo {
  position: relative;
  width: 8%;
}
</style>
