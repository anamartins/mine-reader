<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: { type: String, requiqued: false },
  borderColor: { type: String, requiqued: false }
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const animationDuration = `${randomNumber(5, 20)}s`

const minRotation = `${randomNumber(-45, -1)}deg`
const maxRotation = `${randomNumber(1, 45)}deg`

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
  width: 60%;
  height: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  opacity: 0.7;
  animation: animation infinite alternate ease-in-out
    v-bind('animationDuration');
  overflow: hidden;
}

@keyframes animation {
  0% {
    border-radius: v-bind('minBorder');
    transform: translate(-50%, -50%) rotate(v-bind('minRotation'));
  }

  100% {
    border-radius: v-bind('maxBorder');
    transform: translate(-50%, -50%) rotate(v-bind('maxRotation'));
  }
}
</style>
