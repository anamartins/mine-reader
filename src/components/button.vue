<script setup>
const props = defineProps({
  label: String
})
</script>
<template>
  <button type="button">{{ props.label }}</button>
</template>
<style>
button {
  position: relative;
  width: 40%;
  justify-self: center;
  padding: 5% 10%;
  margin: 5% 0px;
  border: 0px;
  border-radius: 200px 250px 100px 150px;
  background-color: #ccc;
  font-size: 1.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #aaa;
  color: white;
}
</style>
