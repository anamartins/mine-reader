<script setup>
import { getColors } from '../../utils/colors'
import AnimatedBoxLayer from '../AnimatedBoxLayer.vue'

const colors = getColors()

const darkTextColor = colors.darkTextColor

const props = defineProps({
  linkName: { type: String, required: false, default: 'home' },
  fontSize: { type: String, required: false, default: '3rem' },
  fontColor: { type: String, required: false, default: '#333333' },
  hasAnimatedBox: { type: Boolean, required: false, default: false }
})
</script>

<template>
  <div class="logo">
    <AnimatedBoxLayer
      color="#fa5788"
      max-width="500px"
      max-height="500px"
      :is-paused="true"
      v-if="hasAnimatedBox"
    />
    <AnimatedBoxLayer
      color="#4a148c"
      max-width="500px"
      max-height="500px"
      :is-paused="true"
      v-if="hasAnimatedBox"
    />
    <AnimatedBoxLayer
      border-color="#333"
      max-width="500px"
      max-height="500px"
      :is-paused="true"
      v-if="hasAnimatedBox"
    />
    <AnimatedBoxLayer
      color="#c2185b"
      max-width="500px"
      max-height="500px"
      :is-paused="true"
      v-if="hasAnimatedBox"
    />
    <h1>
      <router-link class="logo-link" :to="{ name: props.linkName }"
        >mine</router-link
      >
    </h1>
  </div>
</template>

<style scoped>
.logo {
  position: relative;
  font-family: 'Bree Serif', serif;
  font-size: v-bind('props.fontSize');
  margin: 0;
  padding: 0;
  width: 100%;
}

h1 {
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
}
.logo-link {
  color: v-bind('props.fontColor');
  width: 100%;
}
.logo-link:hover {
  color: v-bind('darkTextColor');
  text-decoration: none;
}
</style>
