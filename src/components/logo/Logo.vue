<script setup>
import { getColors } from '../../utils/colors'
import AnimatedBoxLayer from '../AnimatedBoxLayer.vue'

const colors = getColors()

const darkTextColor = colors.darkTextColor

const props = defineProps({
  linkName: { type: String, default: 'home' },
  fontSize: { type: String, default: '3rem' },
  fontColor: { type: String, default: '#333333' },
  hasAnimatedBox: { type: Boolean, default: false }
})
</script>

<template>
  <div class="logo">
    <div class="logo__background">
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
    </div>
    <h1>
      <router-link class="logo__link" :to="{ name: props.linkName }"
        >mine</router-link
      >
    </h1>
  </div>
</template>

<style scoped>
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  font-family: 'Bree Serif', serif;
  font-size: v-bind('props.fontSize');
  margin: 0;
  padding: 0;
  width: 8%;
}

h1 {
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
}
.logo__link {
  color: v-bind('props.fontColor');
}
.logo__link:hover {
  color: v-bind('darkTextColor');
  text-decoration: none;
}

@media only screen and (max-width: 300px) {
  .logo__background {
    display: none;
    color: #fff;
  }
  .logo__link {
    color: var(--dark-text);
    background-color: #fff;
  }
  .logo {
    width: auto;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media only screen and (min-width: 301px) and (max-width: 600px) {
  .logo__background {
    display: none;
  }
  .logo__link {
    color: var(--dark-text);
    background-color: #fff;
  }
  .logo {
    width: auto;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

@media only screen and (min-width: 601px) and (max-width: 1000px) {
  .logo {
    width: auto;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
