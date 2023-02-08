<script setup>
import { randomNumber } from '../../utils/number'

const props = defineProps({
  color: { type: String, required: false },
  borderColor: { type: String, requiqued: false }
})

const animationDuration = `${randomNumber(1, 5)}s`

// const translate1 = `${randomNumber(-10, 10)}%`
// const translate2 = `${randomNumber(-10, 10)}%`
// const translate3 = `${randomNumber(-10, 10)}%`
// const translate4 = `${randomNumber(-10, 10)}%`

const rotation1 = `${randomNumber(-45, 45)}deg`
const rotation2 = `${randomNumber(-45, 45)}deg`

const minHeight = `${randomNumber(35, 50)}px`
const maxHeight = `${randomNumber(35, 50)}px`
const minWidth = `${randomNumber(35, 50)}px`
const maxWidth = `${randomNumber(35, 50)}px`

const minTopBorder = randomNumber(50, 80)
const minRightBorder = randomNumber(50, 80)
const minBottomBorder = randomNumber(50, 80)
const minLeftBorder = randomNumber(50, 80)
const minBorder = `${minTopBorder}px ${minRightBorder}px ${minBottomBorder}px ${minLeftBorder}px`

const maxTopBorder = randomNumber(100, 150)
const maxRightBorder = randomNumber(100, 150)
const maxBottomBorder = randomNumber(100, 150)
const maxLeftBorder = randomNumber(100, 150)
const maxBorder = `${maxTopBorder}px ${maxRightBorder}px ${maxBottomBorder}px ${maxLeftBorder}px`
</script>
<template>
  <div class="box"></div>
</template>
<style>
.box {
  position: absolute;
  opacity: 0.7;
  width: 10%;
  min-width: v-bind('minWidth');
  max-width: v-bind('maxWidth');
  height: 5%;
  min-height: v-bind('minHeight');
  max-height: v-bind('maxHeight');
  animation: animation infinite alternate ease-in-out
    v-bind('animationDuration');
  overflow: hidden;
  background-color: v-bind('color');
  border: 2px solid v-bind('props.borderColor');
}

@keyframes animation {
  0% {
    border-radius: v-bind('minBorder');
    /* transform: translate(v-bind('translate1'), v-bind('translate2'))
      rotate(v-bind('rotation1')); */
    transform: rotate(v-bind('rotation1'));
  }

  100% {
    border-radius: v-bind('maxBorder');
    /* transform: translate(v-bind('translate3'), v-bind('translate4'))
      rotate(v-bind('rotation2')); */
    transform: rotate(v-bind('rotation2'));
  }
}
</style>
