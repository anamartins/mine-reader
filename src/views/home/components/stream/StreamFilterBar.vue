<script setup>
// import { useTagsStore } from '../../../../stores/tags'
// import { computed } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import StreamSeeUnread from './StreamSeeUnread.vue'
import Tag from '../../../../components/Tag.vue'
import Button from '../../../../components/SimpleButton.vue'
import { onMounted } from 'vue'

const props = defineProps({
  title: { type: String, required: false },
  icon: { typs: String, required: false },
  tags: { type: Array, required: false },
  feedId: { type: String, required: false }
})

const postsStore = usePostsStore()

async function onClickButton() {
  await postsStore.markAllPostsAsRead(props.feedId)
}
</script>
<template>
  <div class="filter-bar">
    <div class="filter-bar__title">{{ props.title }}</div>
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

    <Button
      class="simple-button"
      label="mark all as read"
      @on-button-click="onClickButton"
    />
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

.filter-bar__title {
  font-size: 1.2rem;
  font-weight: 400;
}

.tags {
  display: flex;
}

.simple-button {
  margin: 0.5rem 0;
}
</style>
