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
  feedsStore.getFeeds()
}

function onRemoveButtonClick() {
  feedsStore.removeFeed(selected)
  feedsStore.getFeeds()
}
</script>

<template>
  <Sidebar />
  <div class="follow-feed">
    <label for="feed">Feed URL:</label>
    <input type="text" name="feed" v-model="feed" />
    <button type="button" @click="onAddButtonClick">+ add feed</button>

    Unfollow:
    <select v-model="selected">
      <option disabled value="" selected>Please select one</option>
      <option v-for="item in feeds" v-bind:key="item.id">
        {{ item.title }}
      </option></select
    >{{ selected }}
    <button type="button" @click="onRemoveButtonClick">remove feed</button>
  </div>
</template>

<style scoped>
.follow-feed {
  position: relative;
  width: 70%;
}
</style>
