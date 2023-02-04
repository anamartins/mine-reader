<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import Post from './StreamPost.vue'
import StreamFilterBar from './StreamFilterBar.vue'

const showMoreElement = ref(null)

const route = useRoute()
const feedsStore = useFeedsStore()
const postsStore = usePostsStore()
const posts = computed(() => postsStore.posts)
const isReady = computed(() => postsStore.isReady)
const hasNext = computed(() => postsStore.hasNext)

const tags = computed(() => {
  if (selectedFeed.value) {
    return selectedFeed.value.tags
  } else {
    return []
  }
  ß
})

const selectedFeed = computed(() => {
  if (route.params.feed && feedsStore.feeds.length > 0) {
    return feedsStore.getFeedById(route.params.feed)
  }
})

const selectedTag = computed(() => {
  if (route.params.tag) {
    return route.params.tag
  }
})

const title = computed(() => {
  if (selectedFeed.value) {
    return selectedFeed.value.title
  } else if (selectedTag.value) {
    return selectedTag.value
  } else {
    return ''
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
    <StreamFilterBar :title="title" :tags="tags" :feedId="route.params.feed" />
    <div class="loading" v-if="!isReady">Loading</div>
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <div class="box" ref="showMoreElement" v-show="hasNext"></div>
  </div>
</template>

<style scoped>
.stream {
  display: flex;
  position: relative;
  width: 70%;
  max-width: 1500px;
  align-self: self-start;
  flex-wrap: wrap;
}

.box {
  height: 5px;
}
</style>
