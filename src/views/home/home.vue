<script setup>
import { onMounted, computed } from 'vue'
import Sidebar from '../../components/sidebar.vue'
import Stream from './stream.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'

let postsStore = usePostsStore()
postsStore.getPosts()

onMounted(() => {
  const route = useRoute()
  console.log('r', route.query)
})
</script>

<template>
  <Sidebar />
  <Stream />
</template>

<style scoped></style>
