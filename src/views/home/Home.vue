<script setup>
import { onMounted, watch } from 'vue'
import Sidebar from '../../components/sidebar/Sidebar.vue'
import Stream from './components/stream/Stream.vue'
import Header from '../../components/header/Header.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'
import { useUserPreferences } from '../../composables/userPreferences'

const userPreferences = useUserPreferences()
const route = useRoute()
const postsStore = usePostsStore()

function fetchPosts() {
  const feedId = route.params.feed
  const tag = route.params.tag
  const isRead = userPreferences.seeUnreadPosts.value
  const isReadLater = route.name === 'readLater'

  const params = { feedId, tag, isReadLater }
  if (isRead) {
    params.isRead = false
  }
  postsStore.getPosts(params)
}

onMounted(() => {
  fetchPosts()
})

watch(
  () => route.params,
  () => {
    fetchPosts()
  }
)
</script>

<template>
  <div class="wrapper">
    <Header class="header"></Header>
    <div class="content">
      <Sidebar class="sidebar" />
      <Stream class="stream" />
    </div>
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
.sidebar {
  position: sticky;
}
.stream {
  padding: 5.5rem 0 0 0;
}
</style>
