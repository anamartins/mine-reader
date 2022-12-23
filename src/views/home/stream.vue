<script setup>
import { useRoute } from 'vue-router'
import { onMounted, computed, ref } from 'vue'
import { usePostsStore } from '../../stores/posts'
import Post from './post.vue'

const isUnreadLocalStorage = localStorage.getItem('seeUnread')
const box = ref(null)
const seeUnread = ref(isUnreadLocalStorage)

const route = useRoute()
const path = computed(() => route.path)

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

function onSeeUnreadPostsChange() {
  const isReadLater = route.name === 'readLater'
  const isOnlyUnread = seeUnread.value
  localStorage.setItem('seeUnread', isOnlyUnread)
  let feedId = path.value.split('/')[2]
  postsStore.getPosts({ feedId, isReadLater, isOnlyUnread })

  // if (seeUnread.value) {
  //   // postsStore.getOnlyUnreadPosts(feedId)
  // } else {
  //   postsStore.getPosts(feedId)
  // }
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
    <div class="box" ref="box" v-show="hasNext"></div>
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
