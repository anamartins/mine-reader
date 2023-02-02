<script setup>
import { ref, computed } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import Sidebar from '../components/sidebar/Sidebar.vue'
import Checkbox from '../components/Checkbox.vue'

const tag = ref('')
const selected = ref([])

const feedsStore = useFeedsStore()
const feeds = computed(() => feedsStore.feeds)

const tagsStore = useTagsStore()
const tags = computed(() => tagsStore.tags)

async function onAddButtonClick() {
  console.log('tags', tags.value)
  console.log('feeds', feeds.value)

  await tagsStore.addTag(selected.value, tag.value)
  tag.value = ''
  selected.value = []
}

async function onRemoveButtonClick(id) {
  await tagsStore.deleteTag(id)
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
    <ul>
      <li v-for="item in feeds" :key="item.id">
        <Checkbox :label="item.title" :value="item.feedId" v-model="selected" />
      </li>
    </ul>

    <button type="button" @click="onAddButtonClick">+ add tag</button>
  </div>
  <div class="remove-tag">
    <ul class="alltags list">
      <li v-for="tag in tags" :key="tag.id">
        {{ tag.text }}
        <button type="button" @click="onRemoveButtonClick(tag.id)">
          remove tag
        </button>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
