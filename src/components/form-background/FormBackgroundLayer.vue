<script setup>
import { randomNumber } from '../../utils/number'
const props = defineProps({
  color: { type: String, requiqued: false },
  borderColor: { type: String, requiqued: false },
  opacity: { type: String, required: false, default: '0.7' }
})

const animationDuration = `${randomNumber(5, 20)}s`

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
  min-width: calc(600px - 14%);
  max-width: calc(1200px - 14%);
  height: 100%;
  min-height: calc(600px - 10%);
  max-height: calc(1000px - 10%);
  top: 50%;
  left: 50%;
  position: absolute;
  opacity: v-bind('props.opacity');
  animation: animation infinite alternate ease-in-out
    v-bind('animationDuration');
  overflow: hidden;
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
