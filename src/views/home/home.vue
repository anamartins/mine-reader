<script setup>
import { onMounted } from 'vue'
import Sidebar from '../../components/sidebar/sidebar.vue'
import Stream from './stream.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'

const isUnreadLocalStorage = !!localStorage.getItem('seeUnread')

onMounted(() => {
  const route = useRoute()
  const feedId = route.params.feed
  const isOnlyUnread = localStorage.getItem('seeUnread')
  const isReadLater = route.name === 'readLater'

  let postsStore = usePostsStore()

  postsStore.getPosts({ feedId, isReadLater, isOnlyUnread })
})
</script>

<template>
  <Sidebar />
  <Stream />
</template>

<style scoped></style>
