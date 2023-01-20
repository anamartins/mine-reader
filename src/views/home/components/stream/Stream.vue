<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import Post from './StreamPost.vue'
import TheFilterBar from './StreamFilterBar.vue'

const showMoreElement = ref(null)
const title = computed(() => {
  if (selectedFeed.value) {
    return selectedFeed.value.title
  } else {
    return 'Home'
  }
})
const tags = computed(() => {
  if (selectedFeed.value) {
    return selectedFeed.value.tags
  } else {
    return []
  }
})

const route = useRoute()
const feedsStore = useFeedsStore()
const postsStore = usePostsStore()
const posts = computed(() => postsStore.posts)
const isReady = computed(() => postsStore.isReady)
const hasNext = computed(() => postsStore.hasNext)

const selectedFeed = computed(() => {
  if (route.params.feed && feedsStore.feeds.length > 0) {
    return feedsStore.getFeedById(route.params.feed)
  }
})

const observer = new IntersectionObserver(onObserverChanges)

onMounted(() => {
  observer.observe(showMoreElement.value)
})

onBeforeUnmount(() => {
  observer.unobserve(showMoreElement.value)
})

function onObserverChanges(entries) {
  const isIntersecting = entries[0].isIntersecting
  if (isReady.value && isIntersecting) postsStore.getMorePosts()
}
</script>
<template>
  <div class="stream">
    <TheFilterBar :title="title" :tags="tags" />
    <div class="loading" v-if="!isReady">Loading</div>
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <div class="box" ref="showMoreElement" v-show="hasNext"></div>
  </div>
</template>

<style scoped>
.stream {
  position: relative;
  width: 70%;
  max-width: 1500px;
  align-self: self-start;
  display: flex;
  flex-wrap: wrap;
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
