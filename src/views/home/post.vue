<script setup>
import { usePostsStore } from '../../stores/posts'

const props = defineProps({
  post: { type: Object, required: true }
})

let postsStore = usePostsStore()

async function onPostClick() {
  await postsStore.markPostAsRead(
    props.post.id,
    props.post.feedId,
    props.post.isRead
  )
  props.post.isRead = true
}

async function onMarkAsReadChange() {
  await postsStore.markPostAsRead(
    props.post.id,
    props.post.feedId,
    props.post.isRead
  )
}

async function onReadLaterChange() {
  await postsStore.readPostLater(props.post.id, props.post.isReadLater)
}
</script>

<template>
  <div class="post" :class="{ read: post.isRead }">
    <base target="_blank" />
    <div class="post-title">
      <a :href="post.link" @click="onPostClick">{{ post.title }}</a>
    </div>
    <div class="post-source">{{ post.feed.title }}</div>
    <div class="post-date">{{ post.pubDate }}</div>
    <label class="check-label">
      <input
        class="check"
        type="checkbox"
        value="isRead"
        v-model="post.isRead"
        @change="onMarkAsReadChange"
      />Mark as read
    </label>
    <label class="check-label">
      <input
        class="check"
        type="checkbox"
        value="isreadLater"
        v-model="post.isReadLater"
        @change="onReadLaterChange"
      />Read Later
    </label>
    <div class="post-content" v-html="post.content"></div>
  </div>
</template>

<style scoped>
.post {
  border: 2px solid black;
  margin: 1% 0;
  padding: 1%;
  width: calc(100% - 4px - 2%);
  border-radius: 5px;
  cursor: pointer;
}
.post:hover {
  background-color: #ddd;
}
.read {
  /* background-color: deeppink; */
  border: 1px solid #666;
  padding: calc(1% + 1px);
  color: #666;
}

.check {
  margin: 0 3px 0 0;
}

.check-label {
  margin: 0 10px 0 0;
}

.post-title a {
  color: #000;
}

.read .post-title :deep(a) {
  color: #666;
}

.post-title {
  font-size: 20px;
  font-weight: 700;
}

.post-content :deep(img) {
  display: none;
}
</style>
