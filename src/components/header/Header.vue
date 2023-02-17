<script setup>
import { getColors } from '../../utils/colors'
import Logo from '../logo/Logo.vue'
const colors = getColors()

const backgroundColor = colors.backgroundColor

const emit = defineEmits(['onMenuClick'])

const props = defineProps({
  isMenuOpen: { type: Boolean, required: true }
})

function onMenuClick() {
  emit('onMenuClick')
}
</script>
<template>
  <header>
    <Logo font-size="1rem" :font-color="backgroundColor" has-animated-box />
    <div class="menu" @click="onMenuClick">
      <img
        v-if="props.isMenuOpen"
        src="../../assets/img/close.svg"
        class="menu__icon"
      />
      <img
        v-else="props.isMenuOpen"
        src="../../assets/img/menu.svg"
        class="menu__icon"
      />
    </div>
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
  z-index: 3;
}

.menu {
  width: 4rem;
  height: 3rem;
  position: absolute;
  top: 0px;
  left: 0px;
  display: none;
  cursor: pointer;
}

.menu__icon {
  margin: 0;
  padding: 0.5rem 0 0;
  width: 100%;
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
