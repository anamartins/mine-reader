<script setup>
import vFocus from '../directives/vFocus'
import { getColors } from '../utils/colors'

const props = defineProps({
  type: { type: String, default: 'text' },
  isRequired: { type: Boolean },
  label: { type: String },
  modelValue: { type: String },
  focus: { type: Boolean, default: false }
})

const colors = getColors()
console.log('colors', colors)
const darkTextColor = colors.darkTextColor
</script>
<template>
  <div class="input-text">
    <label class="label-input">
      {{ label }}
      <input
        class="input"
        :type="type"
        :value="modelValue"
        :required="isRequired"
        @input="$emit('update:modelValue', $event.target.value)"
        v-focus="focus"
      />
    </label>
  </div>
</template>
<style scoped>
.input {
  margin: 1% 0px 10% 0px;
  padding: 3%;
  width: 100%;
  height: 1.3rem;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
}

.label-input {
  font-size: 1rem;
}
</style>
