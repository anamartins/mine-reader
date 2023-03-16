<script setup>
import Count from '../Count.vue'
import { getColors } from '../../utils/colors'
const props = defineProps({
  imageSource: { type: String, required: true },
  linkName: { type: String },
  number: { type: Number },
  tooltip: { type: String }
})

const colors = getColors()
</script>
<template>
  <div class="icon">
    <span :data-text="props.tooltip" class="tooltip">
      <router-link class="icon__link" :to="{ name: props.linkName }">
        <img :src="props.imageSource" class="icon__img" />
      </router-link>
      <Count
        class="number"
        :number="props.number"
        v-if="props.number"
        :background-color="colors.primaryColorVariation"
      />
    </span>
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

.tooltip {
  position: relative;
  z-index: 2;
}

.tooltip:before {
  content: attr(data-text);
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -300%);
  width: 3rem;
  padding: 0.2rem 0.1rem;
  background-color: var(--surface-color);
  font-size: 0.7rem;
  color: #333;
  border: 1px solid #ccc;
  text-align: center;
  display: none;
}

.tooltip:hover:before {
  display: block;
}

.tooltip.left:before {
  left: initial;
  margin: initial;
}
</style>
