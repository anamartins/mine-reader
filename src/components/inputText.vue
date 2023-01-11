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
<style scoped>
input {
  margin: 1% 0px 10% 0px;
  padding: 3% 5%;
  width: 100%;
  height: 20px;
  border: 0px;
  border-radius: 65px 100px 50px 80px;
  background-color: #eee;
  font-family: 'Inter';
  font-size: 1.2rem;
}

label {
  font-size: 1rem;
}
</style>
