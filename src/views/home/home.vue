<script setup>
import { onMounted } from 'vue'
import Sidebar from '../../components/sidebar/Sidebar.vue'
import Stream from './components/stream/Stream.vue'
import Header from '../../components/header/Header.vue'
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
  <div class="wrapper">
    <div class="content">
      <Sidebar class="sidebar" />
      <Stream class="stream" />
    </div>
    <Header class="header"></Header>
  </div>
</template>

<style scoped>
.wrapper {
  width: 90%;
}
.content {
  width: 100%;
  display: flex;
}
.header {
  position: fixed;
  top: 0;
  width: 90%;
}
.sidebar {
  position: sticky;
}
.stream {
  padding: 5.5rem 0 0 0;
}
</style>
