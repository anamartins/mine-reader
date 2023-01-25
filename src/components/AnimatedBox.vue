<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: { type: String, requiqued: false },
  borderColor: { type: String, requiqued: false },
  round: { type: Object, required: true }
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
const topBorder = randomNumber(500, 2000)
const rightBorder = randomNumber(500, 2000)
const bottomBorder = randomNumber(500, 2000)
const leftBorder = randomNumber(500, 2000)

const border = `${topBorder}px ${rightBorder}px ${bottomBorder}px ${leftBorder}px`
</script>
<template>
  <div class="box"></div>
</template>
<style scoped>
.box {
  background-color: v-bind('props.color');
  border: 2px solid v-bind('props.borderColor');
  border-radius: v-bind('border');
  width: 60%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  opacity: 0.7;
}
</style>
