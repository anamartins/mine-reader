<script setup>
const props = defineProps({
  isRequired: Boolean,
  label: String,
  modelValue: String
})
</script>
<template>
  <div class="input-text">
    <label>
      {{ label }}
      <input
        type="text"
        :value="modelValue"
        :required="isRequired"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
