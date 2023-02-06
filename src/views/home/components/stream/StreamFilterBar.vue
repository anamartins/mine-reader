<script setup>
import { useTagsStore } from '../../../../stores/tags'
// import { computed } from 'vue'
import StreamSeeUnread from './StreamSeeUnread.vue'

const props = defineProps({
  title: { type: String },
  tags: { type: Array },
  feedId: { type: String }
})

const tagsStore = useTagsStore()

async function onCloseButtonClick(tag) {
  await tagsStore.removeTagFromFeed(props.feedId, tag)
}
</script>
<template>
  <div class="filter-bar">
    <div class="title">{{ props.title }}</div>
    <div class="tags">
      <span v-for="tag in tags">
        {{ tag }}
        <button class="close" @click="onCloseButtonClick(tag)">X</button>
      </span>
    </div>
    <StreamSeeUnread />
  </div>
</template>
<style scoped>
.filter-bar {
  position: sticky;
  top: 3rem;
  width: 96%;
  padding: 1% 2%;
  background-color: var(--surface-color);
  border-bottom: 1px solid #ccc;
  z-index: 1;
}
.close {
  background-color: deeppink;
  cursor: pointer;
  padding: 5px;
  margin: 0 5px 0 1px;
  border: 0;
}
</style>
