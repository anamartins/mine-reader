<script setup>
import { onMounted, computed, ref } from 'vue'
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
const hasNext = computed(() => postsStore.hasNext)

function onObserverChanges(entries) {
  let isIntersecting = entries[0].isIntersecting
  if (isReady.value && isIntersecting) postsStore.getMorePosts()
}
</script>
<template>
  <div class="stream">
    <div class="filter-bar">FILTER BAR</div>
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <div class="box" ref="box" v-show="hasNext"></div>
  </div>
</template>

<style scoped>
.stream {
  position: relative;
  width: 70%;
}

.filter-bar {
  background-color: deeppink;
  width: 100%;
  height: 20%;
}

.box {
  height: 5px;
}
</style>
