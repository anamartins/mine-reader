<script setup>
import vFocus from '../directives/vFocus'

const props = defineProps({
  type: { type: String, requided: false, default: 'text' },
  isRequired: { type: Boolean, requided: false },
  label: { type: String, requided: false },
  placeholder: { type: String, required: false, default: '' },
  modelValue: { type: String },
  focus: { type: Boolean, default: false }
})
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
  margin: 1rem 0;
  border-color: var(--dark-text);
  padding: 0.8rem 1rem;
  width: calc(90% - 2px);
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
