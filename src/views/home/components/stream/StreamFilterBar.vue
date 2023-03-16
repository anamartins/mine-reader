<script setup>
import { computed } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import StreamSeeUnread from './StreamSeeUnread.vue'
import Tag from '../../../../components/Tag.vue'
import Button from '../../../../components/SimpleButton.vue'

const props = defineProps({
  title: { type: String },
  icon: { typs: String },
  tags: { type: Array },
  feedId: { type: String }
})

const postsStore = usePostsStore()

const feedsStore = useFeedsStore()

async function onClickButton() {
  await postsStore.markAllPostsAsRead(props.feedId)

  const feed = feedsStore.getFeedById(props.feedId)
  feed.unread = 0
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
  padding: 0.5rem 1rem;
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
