<script setup>
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'
import SimpleButton from './SimpleButton.vue'
const props = defineProps({
  isCheckboxVisible: { type: Boolean, required: false, default: true },
  list: { type: Array, required: true },
  buttonLabel: { type: String, required: false }
})

const emit = defineEmits(['onChange', 'onButtonClick'])

const selected = ref([])

function onCheckboxChange() {
  emit('onChange', selected.value)
}

function onButtonClick(params) {
  console.log('button on feedtable', params)
  emit('onButtonClick', params)
}
</script>

<template>
  <table class="feed-table">
    <tr v-for="item in list" :key="item.id">
      <td class="feed-table__link">
        <Checkbox
          v-if="isCheckboxVisible"
          :label="item.title"
          :value="item.feedId"
          v-model="selected"
          @change="onCheckboxChange"
        />
        <a v-else="isCheckboxVisible" :src="item.website" target="_blank">{{
          item.title
        }}</a>
      </td>
      <td class="feed-table__button">
        <SimpleButton
          class="simple-button"
          :label="props.buttonLabel"
          @click="onButtonClick({ feedId: item.feedId, url: item.url })"
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

.feed-table__link {
  cursor: pointer;
}
.feed-table__button {
  text-align: right;
}

.simple-button {
  margin: 0.1rem 0rem;
}
</style>
