<script setup>
import { ref, computed, watch } from 'vue'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import Input from '../components/InputText.vue'
import Loading from '../components/Loading/Loading.vue'
import FeedTable from '../components/FeedTable.vue'

const feed = ref('')
const feedsStore = useFeedsStore()
const isLoading = computed(() => feedsStore.isLoading)
const searchList = computed(() => feedsStore.searchList)
const isEmpty = computed(() => searchList.value.length === 0)

let timeout

async function onAddButtonClick(params) {
  await feedsStore.followNewFeed(params.url)
  feed.value = ''
}

watch(feed, () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    feedsStore.searchFeed(feed.value)
  }, 1000)
})

// watch(searchList, () => {
//   if (searchList.value.length > 0) isEmpty.value = false
// })
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

      <div v-if="isEmpty" class="feedtable__empty">
        Type something up here to show options here.
      </div>

      <FeedTable
        :list="searchList"
        :isCheckboxVisible="false"
        @on-button-click="onAddButtonClick"
        buttonLabel="+ add feed"
      >
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
  top: 50%;
  left: 50%;
}

.simple-button {
  margin: 0.1rem 0rem;
}

.feedtable__empty {
  position: relative;
  background-color: var(--secondary-color);
  padding: 0.5rem;
  color: white;
  left: 50%;
  top: 3rem;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
}

@media only screen and (max-width: 1000px) {
  .follow-feed {
    margin: 0 1rem;
  }
}
</style>
