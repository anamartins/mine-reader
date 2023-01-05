<script setup>
import { ref, computed } from 'vue'
import Sidebar from '../components/sidebar/sidebar.vue'
import { useFeedsStore } from '../stores/feeds'

const feed = ref('')
const selected = ref('Please select one')

let feedsStore = useFeedsStore()
let feeds = computed(() => feedsStore.feeds)

async function onAddButtonClick() {
  await feedsStore.followNewFeed(feed.value)
  feed.value = ''
}

function onRemoveButtonClick(feedId) {
  feedsStore.removeFeed(feedId)
}
</script>

<template>
  <Sidebar />
  <div class="follow-feed">
    <label>Feed URL:</label>
    <input type="text" name="feed" v-model="feed" />
    <button type="button" @click="onAddButtonClick">+ add feed</button>

    Unfollow:
    <ul>
      <li v-for="item in feeds" :key="item.id">
        {{ item.title }}
        <button type="button" @click="onRemoveButtonClick(item.feedId)">
          remove feed
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.follow-feed {
  position: relative;
  width: 70%;
}
</style>
