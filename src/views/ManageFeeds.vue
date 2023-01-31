<script setup>
import { ref, computed } from 'vue'

import { useFeedsStore } from '../stores/feeds'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Input from '../components/InputText.vue'
import Button from '../components/ConfirmButton.vue'

const feed = ref('')
const feedsStore = useFeedsStore()
const feeds = computed(() => feedsStore.feeds)

console.log('feed', feeds)

let timeout

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
  <div class="manage-feed">
    <div>
      <ul>
        <li v-for="item in feeds" :key="item.id">
          <a :href="item.link" target="_blank">{{ item.title }}</a>
          <button type="button" @click="onRemoveButtonClick(item.feedId)">
            remove feed
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.manage-feed {
  position: relative;
  width: 70%;
}
</style>
