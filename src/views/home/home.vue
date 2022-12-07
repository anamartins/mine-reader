<script setup>
import { onMounted, onUpdated, computed } from 'vue'
import Sidebar from '../../components/sidebar.vue'
import Stream from './stream.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'

onMounted(() => {
  const route = useRoute()
  const feedId = route.params.feed
  let postsStore = usePostsStore()
  postsStore.getPosts(feedId)
})
</script>

<template>
  <Sidebar />
  <Stream />
</template>

<style scoped></style>
