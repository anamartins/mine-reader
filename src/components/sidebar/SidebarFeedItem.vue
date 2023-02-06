<script setup>
import SidebarFeedItemIcon from '../FeedIcon.vue'

const props = defineProps({
  feed: { type: Object, required: true }
})
</script>

<template>
  <li class="feed" :key="feed.id">
    <SidebarFeedItemIcon :icon="feed.icon" />
    <router-link
      class="feed-name"
      :to="{
        name: 'feed',
        params: { feed: feed.feedId }
      }"
    >
      {{ feed.title }} ({{ feed.unread }})
    </router-link>
  </li>
</template>

<style scoped lang="scss">
.feed {
  margin: 2% 0 2% 0;
  display: flex;
  align-items: center;
}
</style>
