<script setup>
// import { useTagsStore } from '../../../../stores/tags'
// import { computed } from 'vue'
import StreamSeeUnread from './StreamSeeUnread.vue'
import Tag from '../../../../components/Tag.vue'

const props = defineProps({
  title: { type: String },
  tags: { type: Array },
  feedId: { type: String }
})

// const tagsStore = useTagsStore()
</script>
<template>
  <div class="filter-bar">
    <div class="title">{{ props.title }}</div>
    <div class="tags">
      <Tag
        v-for="tag in tags"
        :tag="tag"
        :feedId="props.feedId"
        :isCloseButtonVisible="true"
        class="tag"
      />
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

.tags {
  display: flex;
}
</style>
