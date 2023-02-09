<script setup>
import { getColors } from '../utils/colors'

const props = defineProps({
  label: { type: String }
})

const colors = getColors()
const primaryColor = colors.primaryColor
const lightTextColor = colors.lightTextColor
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
  background-color: v-bind('primaryColor');
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
}

/* .confirmation-button:hover {
  /* background-color: #aaa;
  color: white; 
} */
</style>
