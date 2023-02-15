<script setup>
const props = defineProps({
  label: { type: String }
})
</script>
<template>
  <button class="confirmation-button" type="submit">{{ props.label }}</button>
</template>
<style scoped>
.confirmation-button {
  position: relative;
  align-self: center;
  padding: 5% 0%;
  margin: 5% 0px;
  border: 0px;
  border-radius: 10px;
  background-color: var(--primary-color);
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}
</style>
