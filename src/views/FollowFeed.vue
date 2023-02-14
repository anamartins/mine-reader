<script setup>
import { ref, computed, watch } from 'vue'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import Header from '../components/header/Header.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Input from '../components/InputText.vue'
import Button from '../components/SimpleButton.vue'
import Loading from '../components/Loading/Loading.vue'
import FeedTable from '../components/FeedTable.vue'

const feed = ref('')
const feedsStore = useFeedsStore()
// const feeds = computed(() => feedsStore.feeds)
const isLoading = computed(() => feedsStore.isLoading)
const searchList = computed(() => feedsStore.searchList)

let timeout

async function onAddButtonClick(url) {
  await feedsStore.followNewFeed(url)
  console.log(url)
  // feed.value = ''
}

watch(feed, (newValue) => {
  // if (isTimeoutSet) {
  clearTimeout(timeout)
  // }
  timeout = setTimeout(() => {
    feedsStore.searchFeed(feed.value)
  }, 1000)
})
</script>

<template>
  <PageWithSidebar>
    <div class="follow-feed">
      <h2>Follow a new feed</h2>
      <label>Feed URL:</label>
      <Input
        class="follow-input"
        placeholder="add the feed name or URL here"
        name="feed"
        v-model="feed"
        :focus="true"
      />
      <Loading class="loading mark-read" v-if="isLoading" />
      <FeedTable :list="searchList">
        <Button
          class="simple-button"
          label="+ add feed"
          @click="onAddButtonClick(item.url)"
        />
      </FeedTable>
    </div>
  </PageWithSidebar>
</template>

<style scoped>
.search-list {
  width: 100%;
  padding: 0.5rem 0;
}

.search-list__button {
  text-align: right;
}

.follow-feed {
  position: relative;
  width: 100%;
}

.follow-input {
  width: 100%;
}

.input {
  font-size: 0.8rem;
}

.loading {
  position: relative;
  top: 25%;
  left: 25%;
}

.simple-button {
  margin: 0.1rem 0rem;
}
</style>
