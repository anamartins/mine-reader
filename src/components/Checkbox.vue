<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String },
  modelValue: { type: [Boolean, Array] },
  value: { type: String }
})
const isChecked = computed(() => {
  if (props.modelValue instanceof Array) {
    return props.modelValue.includes(props.value)
  }
  return props.modelValue
})

const emit = defineEmits(['update:modelValue'])

function onChange(event) {
  const isElementChecked = event.target.checked

  if (props.modelValue instanceof Array) {
    let newValue = [...props.modelValue]
    if (isElementChecked) {
      newValue.push(props.value)
    } else {
      newValue.splice(newValue.indexOf(props.value), 1)
    }
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', isElementChecked)
  }
}
</script>
<template>
  <div class="checkbox">
    <label>
      <input
        class="check"
        type="checkbox"
        :checked="isChecked"
        @change="onChange"
      />
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
a {
  padding: 0 0 0 0.3rem;
}
</style>
