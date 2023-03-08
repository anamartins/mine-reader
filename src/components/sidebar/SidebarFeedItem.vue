<script setup>
import SidebarFeedItemIcon from '../FeedIcon.vue'

const props = defineProps({
  feed: { type: Object, required: true },
  selected: { type: Boolean, default: false }
})
</script>

<template>
  <li class="feed" :key="feed.id" :class="{ 'feed--selected': selected }">
    <SidebarFeedItemIcon :icon="feed.icon" />
    <router-link
      class="feed__name"
      :to="{
        name: 'feed',
        params: { feed: feed.slug }
      }"
    >
      {{ feed.title }}
    </router-link>
    <span class="feed__unread">({{ feed.unread }})</span>
  </li>
</template>

<style scoped lang="scss">
.feed {
  // margin: 0.1rem 0 0.1rem 0;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  color: #333;
}
.feed--selected {
  font-weight: 500;
  // color: white;
}

.feed__name {
  flex: 1;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feed__unread {
  margin-left: 0.3rem;
}
</style>
