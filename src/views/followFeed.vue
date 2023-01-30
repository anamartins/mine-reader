<script setup>
import { ref, computed, watch } from 'vue'

import { useFeedsStore } from '../stores/feeds'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Input from '../components/InputText.vue'
import Button from '../components/ConfirmButton.vue'

const feed = ref('')
const feedsStore = useFeedsStore()
// const feeds = computed(() => feedsStore.feeds)
const searchList = computed(() => feedsStore.searchList)

let timeout

async function onAddButtonClick(url) {
  await feedsStore.followNewFeed(url)
  feed.value = ''
}

function onRemoveButtonClick(feedId) {
  feedsStore.removeFeed(feedId)
}

watch(feed, (newValue) => {
  // if (isTimeoutSet) {
  clearTimeout(timeout)
  // }
  timeout = setTimeout(() => {
    console.log('newValue', newValue)
    console.log('feed', feed.value)
    feedsStore.searchFeed(feed.value)
  }, 1000)
})
</script>

<template>
  <Sidebar />
  <div class="follow-feed">
    <!-- <Input class="follow-input" label="Feed URL:" :model-value="feed" focus /> -->
    <label>Feed URL:</label>
    <input type="text" name="feed" v-model="feed" />
    <!-- <button type="button" @click="onAddButtonClick">+ add feed!</button> -->

    <div>
      <ul>
        <li v-for="item in searchList" :key="item.id">
          <a :href="item.website" target="_blank">{{ item.title }}</a>
          <button type="button" @click="onAddButtonClick(item.url)">
            + add feed!
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.follow-feed {
  position: relative;
  width: 70%;
}

.follow-input {
  width: 70%;
}
</style>
