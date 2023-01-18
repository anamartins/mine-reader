<script setup>
import { onMounted } from 'vue'
import Sidebar from '../../components/sidebar/Sidebar.vue'
import Stream from './components/stream/Stream.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'
import { useUserPreferences } from '../../composables/userPreferences'

const userPreferences = useUserPreferences()

onMounted(() => {
  const route = useRoute()
  const feedId = route.params.feed
  const tag = route.params.tag
  const isRead = userPreferences.seeUnreadPosts.value
  const isReadLater = route.name === 'readLater'

  const postsStore = usePostsStore()

  const params = { feedId, isReadLater }
  if (isRead) {
    params.isRead = false
  }
  postsStore.getPosts(params)
})
</script>

<template>
  <Sidebar class="sidebar" />
  <Stream class="stream" />
</template>

<style scoped>
.sidebar {
  position: sticky;
  align-self: flex-start;
}
</style>
