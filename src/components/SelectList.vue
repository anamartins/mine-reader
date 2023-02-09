<script setup>
import { ref } from 'vue'
// import { useTagsStore } from '../stores/tags'
import Checkbox from './Checkbox.vue'

const props = defineProps({
  title: { type: String, required: false, default: '' },
  items: { type: Array, required: true }
})

const emit = defineEmits(['onItemChange'])

const isSelectOpen = ref(false)
const selected = ref([])

// const tagsStore = useTagsStore()
// const tags = computed(() => tagsStore.tags)

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
  width: 100%;
  margin-bottom: 1rem;
}

.select-content {
  position: absolute;
  border: 1px solid #333;
  background-color: var(--surface-color);
  width: 100%;
}
.select-button {
  width: calc(100% - 2rem);
  padding: 1rem;
  border: 1px solid #333;
  cursor: pointer;
}

.list {
  padding: 1rem;
}
</style>
