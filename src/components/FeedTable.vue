<script setup>
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'
const props = defineProps({
  list: { type: Array, required: true }
})

const emit = defineEmits(['onChange'])

const selected = ref([])

function onCheckboxChange() {
  console.log('checkbox!', selected.value)
  emit('onChange', selected.value)
}
</script>

<template>
  <table class="feed-table">
    <tr v-for="item in list" :key="item.id">
      <td class="feed-table__link">
        <Checkbox
          :label="item.title"
          :value="item.feedId"
          v-model="selected"
          @change="onCheckboxChange"
        />
        <!-- <a :href="item.website" target="_blank">{{ item.title }}</a> -->
      </td>
      <td class="feed-table__button">
        <slot></slot>
      </td>
    </tr>
  </table>
</template>

<style>
.feed-table {
  width: 100%;
  padding: 0.5rem 0;
}

.feed-table__button {
  text-align: right;
}
</style>
