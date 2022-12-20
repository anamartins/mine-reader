<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { usePostsStore } from '../../stores/posts'

const props = defineProps({
  post: { type: Object, required: true }
})

let postsStore = usePostsStore()

const markedAsRead = ref(props.post.isRead)
const readLater = ref(props.post.isReadLater)

onMounted(() => {})

onUpdated(() => {})

async function onMarkAsReadChange() {
  await postsStore.markPostAsRead(
    props.post.id,
    props.post.feedId,
    markedAsRead.value
  )
}

async function onReadLaterChange() {
  await postsStore.readPostLater(props.post.id, readLater.value)
  console.log('readLAter', readLater.value)
}
</script>

<template>
  <div class="post">
    <base target="_blank" />
    <div class="post-title">
      <a :href="post.link">{{ post.title }}</a>
    </div>
    <div class="post-source">{{ post.feed.title }}</div>
    <div class="post-date">{{ post.pubDate }}</div>
    <input
      type="checkbox"
      id="read"
      value="isRead"
      v-model="markedAsRead"
      @change="onMarkAsReadChange"
    /><label for="read">Mark as read</label>
    <input
      type="checkbox"
      id="readLater"
      value="isreadLater"
      v-model="readLater"
      @change="onReadLaterChange"
    /><label for="read">Read Later</label>
    <div class="post-content" v-html="post.content"></div>
  </div>
</template>

<style scoped>
.post {
  border: 1px solid black;
  margin: 1% 0;
  padding: 1%;
  width: 100%;
}

.post-title a {
  color: #000;
}

.post-title {
  font-size: 20px;
  font-weight: 700;
}
</style>
