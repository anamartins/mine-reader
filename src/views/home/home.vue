<script setup>
import { onMounted } from 'vue'
import Sidebar from '../../components/sidebar/sidebar.vue'
import Stream from './components/stream/stream.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'

onMounted(() => {
  const route = useRoute()
  const feedId = route.params.feed
  const tag = route.params.tag
  const isOnlyUnread = localStorage.getItem('seeUnread') === 'true'
  const isReadLater = route.name === 'readLater'

  let postsStore = usePostsStore()

  postsStore.getPosts({ feedId, tag, isReadLater, isOnlyUnread })
})
</script>

<template>
  <Sidebar />
  <Stream />
</template>

<style scoped></style>
