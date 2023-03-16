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

function getRandomBorderRadius(min, max) {
  const top = randomNumber(min, max)
  const right = randomNumber(min, max)
  const left = randomNumber(min, max)
  const bottom = randomNumber(min, max)

  return `${top}px ${right}px ${bottom}px ${left}px`
}

const animationDuration = `${randomNumber(5, 20)}s`

const animationState = computed(() => {
  if (props.isPaused) return 'paused'
  return 'running'
})

const rotation1 = `${randomNumber(-45, 45)}deg`
const rotation2 = `${randomNumber(-45, 45)}deg`

const minBorder = getRandomBorderRadius(500, 2000)
const maxBorder = getRandomBorderRadius(2500, 5000)
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
