<script setup>
const props = defineProps({
  number: { type: Number, required: true },
  backgroundColor: { type: String, default: 'transparent' },
  fontColor: { type: String, default: '#FFF' }
})
</script>

<template>
  <span class="count">{{ props.number }}</span>
</template>

<style scoped>
.count {
  position: absolute;
  right: -0.5rem;
  border-radius: 50%;
  background-color: v-bind('props.backgroundColor');
  color: v-bind('props.fontColor');
  font-size: 0.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 3px 4px;
  text-align: center;
  line-height: 0.8rem;
}
</style>
