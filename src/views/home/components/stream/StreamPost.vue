<script setup>
import { computed } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { formatDate } from '../../../../utils/date'

const props = defineProps({
  post: { type: Object, required: true }
})

const image = computed(() => {
  return props.post.image
})

const postsStore = usePostsStore()
const date = formatDate(props.post.pubDate)

async function onPostClick() {
  props.post.isRead = true
  await postsStore.markPostAsRead(
    props.post.id,
    props.post.feedId,
    props.post.isRead
  )
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
    <div class="post-wrapper">
      <div class="post-title">
        <a :href="post.link" @click="onPostClick">{{ post.title }}</a>
      </div>
      <div class="post-source">{{ post.feed.title }}</div>
      <div class="post-date">{{ date }}</div>
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
    </div>
    <div class="post-image" v-if="image"><img :src="post.image" /></div>
  </div>
</template>

<style scoped>
.post {
  margin: 1% 0;
  padding: 1%;
  width: calc(100% - 4px - 2%);
  max-width: 1000px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.post:hover {
  background-color: #ddd;
}

.post-wrapper {
  width: 78%;
}
.read {
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

.post-image {
  width: 20%;
  min-width: 50px;
  height: 100%;
  margin: 0 0 0 1%;
  border-radius: 10px;
}
.post-image img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
</style>
