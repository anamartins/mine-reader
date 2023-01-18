<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import Post from './StreamPost.vue'
import TheFilterBar from './StreamFilterBar.vue'

const showMoreElement = ref(null)
const title = ref('')

const route = useRoute()
const feedsStore = useFeedsStore()
const postsStore = usePostsStore()
const posts = computed(() => postsStore.posts)
const isReady = computed(() => postsStore.isReady)
const hasNext = computed(() => postsStore.hasNext)

const observer = new IntersectionObserver(onObserverChanges)

let tags = []
if (route.params.feed) {
  const feed = feedsStore.getFeedById(route.params.feed)
  tags = feed.tags
  title.value = feed.title
} else {
  title.value = 'Home'
}

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
    <Post v-for="post in posts" :post="post" :key="post.id" />
    <div class="box" ref="showMoreElement" v-show="hasNext"></div>
  </div>
</template>

<style scoped>
.stream {
  position: relative;
  width: 70%;
  align-self: self-start;
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
