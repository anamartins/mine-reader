<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'
import SimpleButton from './SimpleButton.vue'
const props = defineProps({
  isCheckboxVisible: { type: Boolean, required: false, default: true },
  list: { type: Array, required: true },
  buttonLabel: { type: String, required: false }
})

// const route = useRoute()

const emit = defineEmits(['onChange', 'onButtonClick'])
const selected = ref([])

function onCheckboxChange() {
  emit('onChange', selected.value)
}

function onButtonClick(params) {
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
          :link="item.website"
          v-model="selected"
          @change="onCheckboxChange"
        />
        <div v-else="isCheckboxVisible" target="_blank">
          <router-link
            :to="{
              name: 'tag',
              params: { tag: item.id }
            }"
          >
            {{ item.title || item.text }}
          </router-link>
        </div>
      </td>
      <td class="feed-table__button">
        <SimpleButton
          class="button"
          :label="props.buttonLabel"
          @click="
            onButtonClick({
              tag: item.text,
              feedId: item.feedId,
              url: item.url
            })
          "
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

.button {
  margin: 0.1rem 0rem !important;
}
</style>
