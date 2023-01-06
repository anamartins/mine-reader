<script setup>
import { ref, computed } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import Sidebar from '../components/sidebar/sidebar.vue'
import Checkbox from '../components/checkbox.vue'

const tag = ref('')
const selected = ref([])

let feedsStore = useFeedsStore()
let feeds = computed(() => feedsStore.feeds)

let tagsStore = useTagsStore()
let tags = computed(() => tagsStore.tags)

function onCheckChange(feedId) {
  selected.value.push(feedId)
}

async function onAddButtonClick() {
  await tagsStore.addTag(selected.value, tag.value)
}

async function onRemoveButtonClick() {}
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
        <Checkbox
          :label="item.title"
          @update:modelValue="onCheckChange(item.feedId)"
        />
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
