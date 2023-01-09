<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import Post from './post.vue'
import FilterBar from './filterBar.vue'

const showMoreElement = ref(null)
const title = ref('')

const route = useRoute()
let feedsStore = useFeedsStore()

let observer = new IntersectionObserver(onObserverChanges)

onMounted(() => {
  observer.observe(showMoreElement.value)
  if (route.params.feed) {
    let feed = feedsStore.getFeedById(route.params.feed)
    debugger
    title.value = feed.title
  } else {
    title.value = 'Home'
  }
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
    <FilterBar :title="title" />
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
