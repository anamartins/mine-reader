<script setup>
import { watch, computed } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import { formatDate } from '../../../../utils/date'
import Icon from '../../../../components/FeedIcon.vue'
import Loading from '../../../../components/Loading/Loading.vue'
import Tag from '../../../../components/Tag.vue'

const props = defineProps({
  post: { type: Object, required: true },
  isHome: { type: Boolean, required: false, default: false }
})

const postsStore = usePostsStore()

const feedsStore = useFeedsStore()

const feedIcon = computed(() => {
  const feed = feedsStore.getFeedById(props.post.feedId)
  return feed?.icon
})

const tags = computed(() => {
  const feed = feedsStore.getFeedById(props.post.feedId)
  return feed?.tags
})

console.log('tags', tags)

const date = formatDate(props.post.pubDate)

const image = computed(() => {
  return props.post.image
})

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
    <div class="post-wrapper">
      <div class="loading mark-read" v-if="post.isMarkPostAsReadLoading">
        <Loading />
      </div>
      <div class="loading read-later" v-if="post.isReadPostLaterLoading">
        <Loading />
      </div>
      <div class="post-title">
        <a :href="post.link" @click="onPostClick" target="_blank">{{
          post.title
        }}</a>
      </div>

      <div class="post-source" v-if="props.isHome">
        <Icon :icon="feedIcon" class="post-source-icon" />
        <div class="post-source-title">{{ post.feed.title }}</div>
      </div>
      <div class="post-date">{{ date.timeAgo }}</div>
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
      <div class="tags" v-if="props.isHome">
        <div class="tag" v-for="tag in tags">{{ tag }}</div>
        <Tag v-for="tag in tags" :tag="tag" />
      </div>
    </div>
    <div class="post-image" v-if="image"><img :src="post.image" /></div>
  </div>
</template>

<style scoped>
.post {
  margin: 0;
  padding: 1%;
  width: 100%;
  max-width: 1000px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: 300;
}
.post:hover {
  background-color: #ddd;
}

.post-wrapper {
  width: 78%;
}
.read {
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
  font-weight: 400;
}

.post-source {
  display: flex;
  align-items: center;
}

.post-source-title {
  font-size: 0.8rem;
}

.post-source-icon {
  width: 0.8rem;
  margin: 0 0.3rem 0 0;
}

.post-image {
  width: 20%;
  min-width: 5rem;
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

.tags {
  display: flex;
  flex-flow: row wrap;
}

.loading {
  position: relative;
  top: 25%;
  left: 50%;
}
</style>
