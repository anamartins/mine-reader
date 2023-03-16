<script setup>
const props = defineProps({
  label: { type: String }
})

const emit = defineEmits(['onButtonClick'])

function onClick() {
  emit('onButtonClick')
}
</script>
<template>
  <button type="button" class="simple-button" @click="onClick">
    {{ props.label }}
  </button>
</template>
<style scoped>
.simple-button {
  padding: 0.5rem;
  margin: 1rem;
  font-size: 0.8rem;
  background-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  color: var(--light-text);
  cursor: pointer;
}

.simple-button:hover {
  background-color: var(--surface-color);
  color: var(--primary-color);
}
</style>
