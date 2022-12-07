<script setup>
import { onMounted, computed, defineProps } from 'vue'
import { usePostsStore } from '../../stores/posts'

import Post from './post.vue'

let postsStore = usePostsStore()
// postsStore.getPosts()
let posts = computed(() => postsStore.posts)

onMounted(() => {})
</script>
<template>
  <div class="stream">
    <Post v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<style scoped>
.stream {
  position: relative;
  width: 70%;
}
</style>
