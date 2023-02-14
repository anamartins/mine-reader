<script setup>
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'
import SimpleButton from './SimpleButton.vue'
const props = defineProps({
  list: { type: Array, required: true },
  buttonLabel: { type: String, required: false, default: true }
})

const emit = defineEmits(['onChange'])

const selected = ref([])

function onCheckboxChange() {
  emit('onChange', selected.value)
}

function onButtonClick(id) {
  console.log('button on feedtable', id)
  emit('onButtonClick', id)
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
      </td>
      <td class="feed-table__button">
        <SimpleButton
          class="simple-button"
          :label="props.buttonLabel"
          @click="onButtonClick(item.feedId)"
        />
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

.simple-button {
  margin: 0.1rem 0rem;
}
</style>
