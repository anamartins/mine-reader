<script setup>
import { onMounted } from 'vue'
import Sidebar from '../../components/sidebar.vue'
import Stream from './stream.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'

onMounted(() => {
  const route = useRoute()
  let postsStore = usePostsStore()
  if (route.name !== 'readLater') {
    const feedId = route.params.feed
    postsStore.getPosts(feedId)
  } else {
    postsStore.getReadLaterPosts()
  }
})
</script>

<template>
  <Sidebar />
  <Stream />
</template>

<style scoped></style>
