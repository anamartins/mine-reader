<script setup>
import { onUpdated, ref } from 'vue'
import SimpleButton from './simple-button/SimpleButton.vue'
const props = defineProps({
  isCheckboxVisible: { type: Boolean, default: true },
  list: { type: Array, required: true },
  buttonLabel: { type: String }
})

const emit = defineEmits(['onChange', 'onButtonClick'])

function onButtonClick(params) {
  emit('onButtonClick', params)
}
</script>

<template>
  <table class="tag-table">
    <tr v-for="item in list" :key="item.id">
      <td class="tag-table__link">
        <div target="_blank">
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
      <td class="tag-table__button">
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

<style scoped>
.tag-table {
  width: 100%;
  padding: 0.5rem 0;
}

.tag-table__button {
  text-align: right;
}

.button {
  margin: 0.1rem 0rem !important;
}
</style>
