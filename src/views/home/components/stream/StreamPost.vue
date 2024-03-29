<script setup>
import { computed } from 'vue'
import { usePostsStore } from '../../../../stores/posts'
import { useFeedsStore } from '../../../../stores/feeds'
import { formatDate } from '../../../../utils/date'
import Icon from '../../../../components/FeedIcon.vue'
import Loading from '../../../../components/Loading/Loading.vue'
import Tag from '../../../../components/Tag.vue'

const props = defineProps({
  post: { type: Object, required: true },
  isHome: { type: Boolean, default: false }
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
      <div v-if="post.isMarkPostAsReadLoading" class="loading mark-read">
        <Loading />
      </div>
      <div v-if="post.isReadPostLaterLoading" class="loading read-later">
        <Loading />
      </div>
      <div class="post-title">
        <a :href="post.link" target="_blank" @click="onPostClick">{{
          post.title
        }}</a>
      </div>

      <div class="post__info">
        <div v-if="props.isHome" class="post-source">
          <Icon :icon="feedIcon" class="post-source-icon" />
          <div class="post-source-title">{{ post.feed.title }}</div>
        </div>
        <div class="post-date">{{ date.timeAgo }}</div>
      </div>
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
      <div v-if="props.isHome" class="tags">
        <Tag v-for="tag in tags" :tag="tag" :feedId="props.post.feedId" />
      </div>
    </div>
    <div v-if="image" class="post-image"><img :src="post.image" /></div>
  </div>
</template>

<style scoped>
.post {
  margin: 0;
  padding: 0.5rem;
  width: calc(100% - 0.5rem);
  max-width: 1000px;
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
  flex: 1;
}

.post__info {
  display: flex;
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

.post-date {
  font-size: 0.8rem;
}

.post-source {
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
}

.post-source-title {
  font-size: 0.8rem;
}

.post-source-icon {
  width: 0.8rem;
  margin: 0 0.3rem 0 0;
}

.post-image {
  width: 10rem;
  min-width: 5rem;
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

@media only screen and (max-width: 600px) {
  .post-image {
    display: none;
  }
}
</style>
