<script setup>
// import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import Post from './post.vue'
import SeeUnread from './seeUnread.vue'

const showMoreElement = ref(null)

// const route = useRoute()
let observer = new IntersectionObserver(onObserverChanges)

onMounted(() => {
  observer.observe(showMoreElement.value)
})

onBeforeUnmount(() => {
  observer.unobserve(showMoreElement.value)
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
    <div class="filter-bar">
      <SeeUnread />
    </div>
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <div class="box" ref="showMoreElement" v-show="hasNext"></div>
  </div>
</template>

<style scoped>
.stream {
  position: relative;
  width: 70%;
}

.filter-bar {
  width: 100%;
  height: auto;
  padding: 10px 5px 5px 5px;
}

.box {
  height: 5px;
}
</style>
