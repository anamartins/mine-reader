<script setup>
import { watch } from 'vue'
import Stream from './components/stream/Stream.vue'
import PageWithSidebar from '../../components/PageWithSidebar.vue'
import { useRoute } from 'vue-router'
import { usePostsStore } from '../../stores/posts'
import { useUserPreferences } from '../../composables/userPreferences'

const userPreferences = useUserPreferences()
const route = useRoute()
const postsStore = usePostsStore()

function fetchPosts() {
  // const feedId = route.params.feed
  const feedSlug = route.params.feed
  const tag = route.params.tag
  const isRead = userPreferences.seeUnreadPosts.value
  const isReadLater = route.name === 'readLater'

  // const params = { feedId, tag, isReadLater }
  const params = { feedSlug, tag, isReadLater }
  if (isRead) {
    params.isRead = false
  }
  postsStore.getPosts(params)
}

watch(
  () => route.params,
  () => {
    fetchPosts()
  },
  { immediate: true }
)
</script>

<template>
  <PageWithSidebar>
    <Stream class="stream" />
  </PageWithSidebar>
</template>
