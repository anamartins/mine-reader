<script setup>
import vFocus from '../directives/vFocus'
import { getColors } from '../utils/colors'

const props = defineProps({
  type: { type: String, requided: false, default: 'text' },
  isRequired: { type: Boolean, requided: false },
  label: { type: String, requided: false },
  placeholder: { type: String, required: false, default: '' },
  modelValue: { type: String },
  focus: { type: Boolean, default: false }
})

const colors = getColors()
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
        :placeholder="props.placeholder"
      />
    </label>
  </div>
</template>
<style scoped>
.input {
  margin: 1% 0px 10% 0px;
  border-color: v-bind('darkTextColor');
  padding: 3%;
  width: 94%;
  height: 1.3rem;
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 300;
}

.label-input {
  font-size: 1rem;
  font-weight: 100;
}
</style>
