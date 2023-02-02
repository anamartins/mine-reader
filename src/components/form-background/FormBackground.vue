<script setup>
import AnimatedBoxLayer from '../AnimatedBoxLayer.vue'
</script>
<template>
  <div class="background">
    <AnimatedBoxLayer
      color="#c2185b"
      min-width="calc(700px - 14%)"
      max-width="1000px"
      min-height="calc(500px - 10%)"
      max-height="850px"
    />
    <AnimatedBoxLayer
      color="#fa5788"
      min-width="calc(700px - 14%)"
      max-width="1000px"
      min-height="calc(700px - 10%)"
      max-height="850px"
    />
    <AnimatedBoxLayer
      color="#4a148c"
      min-width="calc(700px - 14%)"
      max-width="1000px"
      min-height="calc(700px - 10%)"
      max-height="850px"
    />
    <AnimatedBoxLayer
      color="#7c43bd"
      min-width="calc(700px - 14%)"
      max-width="1000px"
      min-height="calc(700px - 10%)"
      max-height="850px"
    />
    <AnimatedBoxLayer
      border-color="#333"
      min-width="calc(500px - 14%)"
      max-width="1000px"
      min-height="calc(500px - 10%)"
      max-height="850px"
    />
    <AnimatedBoxLayer
      color="#ffffff"
      opacity="1"
      class="main-box"
      min-width="600px"
      max-width="900px"
      min-height="600px"
      max-height="800px"
    />
    <slot></slot>
  </div>
</template>
