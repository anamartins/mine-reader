<script setup>
import { useTagsStore } from '../stores/tags'
const props = defineProps({
  tag: { type: String, required: true },
  feedId: { type: String, required: true },
  isCloseButtonVisible: { type: Boolean, default: false }
})

const tagsStore = useTagsStore()

function onCloseButtonClick(tag) {
  tagsStore.removeTagFromFeed(props.feedId, tag)
}
</script>
<template>
  <div class="tag">
    <router-link
      :to="{
        name: 'tag',
        params: { tag: props.tag }
      }"
    >
      {{ props.tag }}
    </router-link>
    <button
      v-if="isCloseButtonVisible"
      class="close"
      @click="onCloseButtonClick(tag)"
    >
      X
    </button>
  </div>
</template>

<style scoped>
.tag {
  margin: 0.3rem 0.5rem 0 0;
  padding: 0.3rem;
  background-color: var(--secondary-color-variation);
  color: #fff;
  font-size: 0.7rem;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
  position: relative;
  align-items: center;
}

.tag a {
  color: #fff;
}

.close {
  background-color: var(--secondary-color-variation);
  cursor: pointer;
  margin: 0 0 0 0.3rem;
  border: 0;
  color: #fff;
  font-size: 0.7rem;
}
</style>
