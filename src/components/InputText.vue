<script setup>
import vFocus from '../directives/vFocus'

const props = defineProps({
  type: { type: String, default: 'text' },
  isRequired: { type: Boolean },
  label: { type: String },
  placeholder: { type: String, default: '' },
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
        v-focus="focus"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
<style scoped>
.input {
  margin: 1rem 0;
  border: 2px solid var(--dark-text);
  padding: 0.8rem 1rem;
  width: calc(90% - 4px);
  height: 1.3rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 300;
}

.label-input {
  font-size: 1rem;
  font-weight: 100;
  width: 100%;
}
</style>
