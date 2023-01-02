<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useUserPreferences } from '../../../../composables/userPreferences'

const route = useRoute()
const path = computed(() => route.path)
const userPreferences = useUserPreferences()

let postsStore = usePostsStore()

function onSeeUnreadPostsChange() {
  const isReadLater = route.name === 'readLater'
  let feedId = path.value.split('/')[2]
  postsStore.getPosts({
    feedId,
    isReadLater,
    isOnlyUnread: userPreferences.seeUnreadPosts
  })
}
</script>
<template>
  <div class="seeUnread">
    <input
      class="check"
      type="checkbox"
      @change="onSeeUnreadPostsChange"
      v-model="userPreferences.seeUnreadPosts"
    />only unread posts
  </div>
</template>
<style scoped></style>
