<script setup>
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const props = defineProps({
  title: { type: String, required: false, default: '' },
  items: { type: Array, required: true }
})

const emit = defineEmits(['onItemChange'])

const isSelectOpen = ref(false)
const selected = ref([])

function openSelect() {
  isSelectOpen.value = !isSelectOpen.value
}

function onItemChange() {
  emit('onItemChange', selected.value)
}
</script>
<template>
  <div class="select-list">
    <div class="select-button" @click="openSelect()">{{ props.title }}</div>
    <div v-if="isSelectOpen" class="select-content">
      <div class="list">
        <ul>
          <li v-for="item in props.items" :key="item.id">
            <Checkbox
              :label="item.text"
              :value="item.text"
              v-model="selected"
              @update:modelValue="onItemChange"
            />
          </li>
        </ul>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
.select-list {
  position: relative;
  padding: 0 0.5rem 0 0;
}

.select-content {
  position: absolute;
  border: 1px solid #333;
  background-color: var(--surface-color);
  width: 250%;
}
.select-button {
  padding: 0.5rem;
  border: 1px solid #333;
  cursor: pointer;
  font-size: 0.8rem;
}

.list {
  padding: 1rem;
}
</style>
