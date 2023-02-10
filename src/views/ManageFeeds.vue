<script setup>
import { ref, computed, watch } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import Checkbox from '../components/Checkbox.vue'
import SelectList from '../components/SelectList.vue'
import InputText from '../components/InputText.vue'

const tag = ref('')

const selectedTags = ref('')
const selected = ref([])
const isModalOpen = ref(false)

const isAnyFeedSelected = computed(() => {
  return selected.value.length > 0
})

const feedsStore = useFeedsStore()
const feeds = computed(() => feedsStore.feeds)

const tagsStore = useTagsStore()
const tags = computed(() => tagsStore.tags)

async function onAddSelectedTags() {
  await tagsStore.addMultipleTags(selected.value, selectedTags.value)
  selectedTags.value = ''
  selected.value = []
  isModalOpen.value = false
}

async function onAddSingleTag() {
  await tagsStore.addSingleTag(selected.value, tag.value)
  tag.value = ''
  selected.value = []
  isModalOpen.value = false
}

async function onRemoveButtonClick(id) {
  await tagsStore.deleteTag(id)
}

function createNewTagClick() {
  isModalOpen.value = !isModalOpen.value
}

function onExitClick() {
  isModalOpen.value = false
}

function onSelectListChange(selected) {
  selectedTags.value = selected
}
</script>
<template>
  <PageWithSidebar>
    <div class="manage-feeds">
      <div class="tool-bar">
        <SelectList
          title="Select a tag"
          :items="tags"
          @on-item-change="onSelectListChange"
          :class="{ disabled: !isAnyFeedSelected }"
        >
          <button
            type="button"
            @click="onAddSelectedTags"
            class="simple-button"
          >
            + add feeds in this tags
          </button>
        </SelectList>
        <div class="actions">
          <ul>
            <li @click="createNewTagClick()" class="actions-item">
              create a new tag
            </li>
          </ul>
        </div>
        <!-- <button type="button" @click="">remove feed</button> -->
      </div>

      <h2>Select the feeds you want to add in this tag</h2>
      <ul class="feed-list">
        <li v-for="item in feeds" :key="item.id">
          <Checkbox
            :label="item.title"
            :value="item.feedId"
            v-model="selected"
          />
        </li>
      </ul>

      <div v-if="isModalOpen" class="modal">
        <div class="exit-modal" @click="onExitClick">X</div>
        <InputText placeholder="type the tag name here" v-model="tag" />

        <label>
          <!-- <input type="text" v-model="tag" /> -->
          <button type="button" @click="onAddSingleTag" class="simple-button">
            + add tag
          </button>
        </label>
      </div>
    </div>
  </PageWithSidebar>
</template>
<style scoped>
.simple-button {
  padding: 0.5rem;
  margin: 1rem;
  font-size: 0.8rem;
  background-color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  color: var(--light-text);
  cursor: pointer;
}

.simple-button:hover {
  background-color: var(--surface-color);
  color: var(--primary-color);
}
.modal {
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #fff;
  border: 1px solid;
  padding: 5rem;
}
.exit-modal {
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0.5rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid #333;
  font-size: 1.5rem;
}

.tool-bar {
  border: 1px solid #333;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
}

.disabled {
  background-color: #ddd;
  border: 1px solid #eee;
  pointer-events: none;
  opacity: 0.4;
}

.exit-modal:hover {
  background-color: var(--primary-color);
  color: #fff;
}
.actions {
  /* border-top: 1px solid #333; */
  /* padding: 0.5rem; */
  position: relative;
  /* padding: 0 0.5rem 0 0; */
  border: 1px solid #333;
  cursor: pointer;
  font-size: 0.8rem;
}
.actions-item {
  cursor: pointer;
  /* width: calc(100% - 1rem); */
  padding: 0.5rem;
}
.actions-item:hover {
  background-color: #eee;
}

.feed-list {
  margin-bottom: 2rem;
}

ul li {
  list-style: none;
}

h2 {
  font-size: 1rem;
}
</style>
