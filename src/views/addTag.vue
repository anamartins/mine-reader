<script setup>
import { ref, computed } from 'vue'
import Sidebar from '../components/sidebar/sidebar.vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'

const tag = ref('')
const selected = ref('Please select one')

let feedsStore = useFeedsStore()
let feeds = computed(() => feedsStore.feeds)

let tagsStore = useTagsStore()
let tags = computed(() => tagsStore.tags)

async function onAddButtonClick() {
  let feed = feeds.value.find((element) => element.title === selected.value)
  await tagsStore.addTag(feed.feedId, tag.value)
}
</script>
<template>
  <Sidebar />
  <div class="add-tag">
    <label
      >add the tag
      <input type="text" v-model="tag" />
    </label>
    at
    <select v-model="selected">
      <option disabled value="" selected>Please select one</option>
      <option v-for="item in feeds" v-bind:key="item.id">
        {{ item.title }}
      </option>
    </select>

    <button type="button" @click="onAddButtonClick">+ add tag</button>
  </div>
</template>
<style scoped></style>
