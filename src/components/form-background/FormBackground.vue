<script setup>
import FormBackgroundLayer from './FormBackgroundLayer.vue'
</script>
<template>
  <div class="background">
    <FormBackgroundLayer color="#c2185b" border-color="#c2185b" />
    <FormBackgroundLayer color="#fa5788" />
    <FormBackgroundLayer color="#4a148c" />
    <FormBackgroundLayer color="#7c43bd" />
    <FormBackgroundLayer border-color="#333" />
    <FormBackgroundLayer color="#ffffff" opacity="1" class="main-box" />
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
