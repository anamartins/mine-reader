<script setup>
import { ref } from 'vue'
import Sidebar from '../components/sidebar.vue'
import { useFeedsStore } from '../stores/feeds'

const feed = ref('')

let feedsStore = useFeedsStore()

async function onButtonClick() {
  await feedsStore.followNewFeed(feed.value)
  feedsStore.getFeeds()
}
</script>

<template>
  <Sidebar />
  <div class="follow-feed">
    <label for="feed">Feed URL:</label>
    <input type="text" name="feed" v-model="feed" />
    <button type="button" @click="onButtonClick">+ add feed</button>
  </div>
</template>

<style scoped>
.follow-feed {
  position: relative;
  width: 70%;
}
</style>
