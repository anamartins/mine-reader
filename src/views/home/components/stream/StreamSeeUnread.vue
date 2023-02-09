<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useUserPreferences } from '../../../../composables/userPreferences'
import CheckBox from '../../../../components/Checkbox.vue'

const route = useRoute()
const path = computed(() => route.path)
const userPreferences = useUserPreferences()

const postsStore = usePostsStore()

function onSeeUnreadPostsChange() {
  const isReadLater = route.name === 'readLater'
  const feedId = route.params.feed
  const tag = route.params.tag
  const params = { feedId, tag, isReadLater }
  if (userPreferences.seeUnreadPosts.value) {
    params.isRead = false
  }
  postsStore.getPosts(params)
}
</script>
<template>
  <div class="seeUnread">
    <CheckBox
      label="see only unread posts"
      v-model="userPreferences.seeUnreadPosts.value"
      @update:modelValue="onSeeUnreadPostsChange"
    />
  </div>
</template>
<style scoped></style>
