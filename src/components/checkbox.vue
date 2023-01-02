<script setup>
const props = defineProps({
  label: String,
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
function onChange(event) {
  emit('update:modelValue', event.target.checked)
}
</script>
<template>
  <div class="checkbox">
    <label>
      <input
        class="check"
        type="checkbox"
        :checked="modelValue"
        @change="onChange"
      />
      {{ label }}
    </label>
  </div>
</template>
