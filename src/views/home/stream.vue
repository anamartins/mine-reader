<script setup>
import {
  onMounted,
  onUnmounted,
  onUpdated,
  computed,
  ref,
  defineProps
} from 'vue'
import { usePostsStore } from '../../stores/posts'

import Post from './post.vue'

const box = ref(null)

onMounted(() => {
  let observer = new IntersectionObserver(onObserverChanges)
  let target = box.value
  observer.observe(target)
})

// onUpdated(() => {
//   console.log('hello from stream')
// })

let postsStore = usePostsStore()
let posts = computed(() => postsStore.posts)
let isReady = computed(() => postsStore.isReady)
const hasNext = computed(() => postsStore.hasNext)

// let unreadPosts = posts.value.filter((element) => element.isRead === false)

function onObserverChanges(entries) {
  let isIntersecting = entries[0].isIntersecting
  if (isReady.value && isIntersecting) postsStore.getMorePosts()
}
</script>
<template>
  <div class="stream">
    <div class="start" ref="start"></div>
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <div class="box" ref="box" v-show="hasNext"></div>
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
