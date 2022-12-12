<script setup>
import { onMounted, onUnmounted, computed, ref, defineProps } from 'vue'
import { usePostsStore } from '../../stores/posts'

import Post from './post.vue'

const box = ref(null)

onMounted(() => {
  let observer = new IntersectionObserver(onObserverChanges)
  let target = box.value
  observer.observe(target)
})

let postsStore = usePostsStore()
let posts = computed(() => postsStore.posts)
let isReady = computed(() => postsStore.isReady)

function onButtonClick() {
  postsStore.getMorePosts()
  console.log('hoy')
}

function onObserverChanges(entries) {
  let isIntersecting = entries[0].isIntersecting
  if (isReady.value && isIntersecting) postsStore.getMorePosts()
}
</script>
<template>
  <div class="stream">
    <div class="start" ref="start"></div>
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <!-- <button type="button" @click="onButtonClick">NEXT</button> -->
    <div class="box" ref="box"></div>
  </div>
</template>

<style scoped>
.stream {
  position: relative;
  width: 70%;
}

.box {
  height: 5px;
}
</style>
