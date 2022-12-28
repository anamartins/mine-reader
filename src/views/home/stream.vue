<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, computed, ref, watch } from 'vue'
import { usePostsStore } from '../../stores/posts'
import Post from './post.vue'

const isUnreadLocalStorage = localStorage.getItem('seeUnread')
const showMoreElement = ref(null)
const seeUnread = ref(isUnreadLocalStorage)

// watch(seeUnread, (newValue) => {
//   console.log('newValue', newValue)
// })

const route = useRoute()
const path = computed(() => route.path)
let observer = new IntersectionObserver(onObserverChanges)

onMounted(() => {
  observer.observe(showMoreElement.value)
})

onUnmounted(() => {
  // console.log(showMoreElement)
  // observer.unobserve(showMoreElement.value)
})

let postsStore = usePostsStore()
let posts = computed(() => postsStore.posts)
let isReady = computed(() => postsStore.isReady)
const hasNext = computed(() => postsStore.hasNext)

function onObserverChanges(entries) {
  let isIntersecting = entries[0].isIntersecting
  if (isReady.value && isIntersecting) postsStore.getMorePosts()
}

function onSeeUnreadPostsChange() {
  const isReadLater = route.name === 'readLater'
  const isOnlyUnread = seeUnread.value
  localStorage.setItem('seeUnread', isOnlyUnread)
  let feedId = path.value.split('/')[2]
  postsStore.getPosts({ feedId, isReadLater, isOnlyUnread })
}
</script>
<template>
  <div class="stream">
    <div class="filter-bar">
      <input
        class="check"
        type="checkbox"
        @change="onSeeUnreadPostsChange"
        v-model="seeUnread"
      />only unread posts
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
