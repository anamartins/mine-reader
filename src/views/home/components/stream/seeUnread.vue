<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useUserPreferences } from '../../../../composables/userPreferences'
import CheckBox from '../../../../components/checkbox.vue'

const route = useRoute()
const path = computed(() => route.path)
const userPreferences = useUserPreferences()

let postsStore = usePostsStore()

function onSeeUnreadPostsChange() {
  const isReadLater = route.name === 'readLater'
  let feedId = path.value.split('/')[2]
  const params = { feedId, isReadLater }
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
