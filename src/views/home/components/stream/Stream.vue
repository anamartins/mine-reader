<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import Post from './StreamPost.vue'
import StreamFilterBar from './StreamFilterBar.vue'
import Loading from '../../../../components/Loading/Loading.vue'

const showMoreElement = ref(null)

const route = useRoute()
const isHome = computed(() => !route.params.feed)

const postsStore = usePostsStore()
const posts = computed(() => postsStore.posts)
const isReady = computed(() => postsStore.isReady)
const hasNext = computed(() => postsStore.hasNext)

const feedsStore = useFeedsStore()

const tags = computed(() => {
  if (selectedFeed.value) {
    return selectedFeed.value.tags
  } else {
    return []
  }
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
  <!-- <div class="stream"> -->
  <main class="stream">
    <StreamFilterBar :title="title" :tags="tags" :feedId="route.params.feed" />
    <div class="loading" v-if="!isReady"><Loading /></div>
    <div class="posts">
      <Post
        v-for="post in posts"
        :post="post"
        :isHome="isHome"
        :key="post.id"
      />
    </div>
    <div class="more-posts" ref="showMoreElement" v-show="hasNext"></div>
  </main>
  <!-- </div> -->
</template>

<style scoped>
.stream {
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1000px;
  align-self: self-start;
  flex-wrap: wrap;
}

.posts {
  animation: rise 2s ease-in-out;
  width: 99%;
}

@keyframes rise {
  0% {
    bottom: -100px;
    opacity: 0;
  }

  100% {
    bottom: 0px;
    opacity: 1;
  }
}

.more-posts {
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
}

.loading {
  position: fixed;
  width: 100%;
  top: 8rem;
  left: 50%;
}

/* @media only screen and (max-width: 300px) {
}
@media only screen and (min-width: 301px) and (max-width: 600px) {
}
@media only screen and (min-width: 601px) and (max-width: 1000px) {
}
@media only screen and (min-width: 1001px) {
} */

@media only screen and (max-width: 1000px) {
  .posts {
    width: calc(100% - 1rem);
    padding: 0 0.5rem;
  }
}
@media only screen and (min-width: 1001px) {
}
</style>
