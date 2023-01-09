<script setup>
import vFocus from '../directives/vFocus'

const props = defineProps({
  type: { type: String, default: 'text' },
  isRequired: Boolean,
  label: String,
  modelValue: String,
  focus: { type: Boolean, default: false }
})
</script>
<template>
  <div class="input-text">
    <label>
      {{ label }}
      <input
        :type="type"
        :value="modelValue"
        :required="isRequired"
        @input="$emit('update:modelValue', $event.target.value)"
        v-focus="focus"
      />
    </label>
  </div>
</template>
