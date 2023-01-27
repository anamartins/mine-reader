<script setup>
import AnimatedBoxLayer from '../AnimatedBoxLayer.vue'
</script>
<template>
  <div class="background">
    <AnimatedBoxLayer
      color="#c2185b"
      min-width="calc(700px - 14%)"
      min-height="calc(1000px - 10%)"
    />
    <AnimatedBoxLayer
      color="#fa5788"
      min-width="calc(700px - 14%)"
      min-height="calc(1000px - 10%)"
    />
    <AnimatedBoxLayer
      color="#4a148c"
      min-width="calc(700px - 14%)"
      min-height="calc(1000px - 10%)"
    />
    <AnimatedBoxLayer
      color="#7c43bd"
      min-width="calc(700px - 14%)"
      min-height="calc(1000px - 10%)"
    />
    <AnimatedBoxLayer
      border-color="#333"
      min-width="calc(700px - 14%)"
      min-height="calc(1000px - 10%)"
    />
    <AnimatedBoxLayer
      color="#ffffff"
      opacity="1"
      class="main-box"
      min-width="calc(600px - 14%)"
      min-height="calc(1000px - 10%)"
    />
    <slot></slot>
  </div>
</template>
<style scoped>
.main-box {
  min-width: 500px;
  max-width: 800px;
  min-height: 500px;
  max-height: 700px;
}
</style>
