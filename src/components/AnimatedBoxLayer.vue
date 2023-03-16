<script setup>
import { computed } from 'vue'
import { randomNumber } from '../utils/number'
const props = defineProps({
  color: { type: String },
  borderColor: { type: String },
  opacity: { type: String, default: '0.7' },
  minWidth: { type: String, default: '100px' },
  maxWidth: { type: String, default: '100px' },
  minHeight: { type: String, default: '100px' },
  maxHeight: { type: String, default: '100px' },
  isPaused: { type: Boolean, default: false }
})

const animationDuration = `${randomNumber(5, 20)}s`

const animationState = computed(() => {
  if (props.isPaused) {
    return 'paused'
  } else {
    return 'running'
  }
})

const rotation1 = `${randomNumber(-45, 45)}deg`
const rotation2 = `${randomNumber(-45, 45)}deg`

const minTopBorder = randomNumber(500, 2000)
const minRightBorder = randomNumber(500, 2000)
const minBottomBorder = randomNumber(500, 2000)
const minLeftBorder = randomNumber(500, 2000)
const minBorder = `${minTopBorder}px ${minRightBorder}px ${minBottomBorder}px ${minLeftBorder}px`

const maxTopBorder = randomNumber(2500, 5000)
const maxRightBorder = randomNumber(2500, 5000)
const maxBottomBorder = randomNumber(2500, 5000)
const maxLeftBorder = randomNumber(2500, 5000)
const maxBorder = `${maxTopBorder}px ${maxRightBorder}px ${maxBottomBorder}px ${maxLeftBorder}px`
</script>
<template>
  <div class="box"></div>
</template>
<style scoped>
.box {
  background-color: v-bind('props.color');
  border: 2px solid v-bind('props.borderColor');
  width: 70%;
  min-width: v-bind('props.minWidth');
  max-width: v-bind('props.maxWidth');
  height: 100%;
  min-height: v-bind('props.minHeight');
  max-height: v-bind('props.maxHeight');
  top: 50%;
  left: 50%;
  position: absolute;
  opacity: v-bind('props.opacity');
  animation: animation infinite alternate ease-in-out
    v-bind('animationDuration');
  animation-play-state: v-bind('animationState');
  overflow: hidden;
  cursor: pointer;
}
.box:hover {
  animation-play-state: running;
}

@keyframes animation {
  0% {
    border-radius: v-bind('minBorder');
    transform: translate(-50%, -50%) rotate(v-bind('rotation1'));
  }

  100% {
    border-radius: v-bind('maxBorder');
    transform: translate(-50%, -50%) rotate(v-bind('rotation2'));
  }
}
</style>
