<script setup>
import Count from './Count.vue'
import { getColors } from '../utils/colors'
const props = defineProps({
  imageSource: { type: String, required: true },
  linkName: { type: String, required: false },
  number: { type: String, required: false }
})

const colors = getColors()
console.log('colors', colors)
</script>
<template>
  <div class="icon">
    <router-link class="icon__link" :to="{ name: props.linkName }">
      <img :src="props.imageSource" class="icon__img" inline />
      <Count
        class="number"
        :number="props.number"
        v-if="props.number"
        :background-color="colors.primaryColorVariation"
      />
    </router-link>
  </div>
</template>
<style scoped lang="scss">
.icon {
  width: 10%;
}
.icon__img {
  width: 100%;
  height: 100%;
  svg {
    path {
      fill: var(--primary-color);
    }
  }
}
</style>
