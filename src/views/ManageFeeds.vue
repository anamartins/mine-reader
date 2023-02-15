<script setup>
import { ref, computed, watch } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import SelectList from '../components/SelectList.vue'
import InputText from '../components/InputText.vue'
import SimpleButton from '../components/SimpleButton.vue'
import FeedTable from '../components/FeedTable.vue'

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

async function onRemoveButtonClick(params) {
  await feedsStore.removeFeed(params.feedId)
  feeds.value = feeds.value.filter((e) => e.feedId !== params.feedId)
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

function onCheckboxChange(listFromComponent) {
  selected.value = listFromComponent
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
          <SimpleButton
            label="+ add feeds in this tags"
            @click="onAddSelectedTags"
          />
        </SelectList>
        <div class="actions">
          <ul>
            <li @click="createNewTagClick()" class="actions-item">
              create a new tag
            </li>
          </ul>
        </div>
      </div>

      <div class="feeds">
        <FeedTable
          :list="feeds"
          @on-change="onCheckboxChange"
          @on-button-click="onRemoveButtonClick"
          buttonLabel="delete"
        >
        </FeedTable>
      </div>
      <div v-if="isModalOpen" class="modal">
        <h2>Add a tag</h2>
        <div class="exit-modal" @click="onExitClick">X</div>
        <InputText
          placeholder="type the tag name here"
          v-model="tag"
          class="modal__input"
        />
        <SimpleButton
          @click="onAddSingleTag"
          label="+ add tag"
          class="modal__button"
        />
      </div>
    </div>
  </PageWithSidebar>
</template>
<style scoped>
.modal {
  position: fixed;
  display: flex;
  flex-flow: column;
  z-index: 1;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-color: #fff;
  border: 1px solid;
  padding: 5rem;
}
.modal__input {
  width: 100%;
}

.modal__button {
  width: calc(100% + 4px);
  margin: 0;
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

.exit-modal:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.tool-bar {
  border: 1px solid #333;
  width: calc(100% - 2rem);
  padding: 1rem;
  display: flex;
}

.disabled {
  background-color: #ddd;
  border: 1px solid #eee;
  pointer-events: none;
  opacity: 0.4;
}

.actions {
  position: relative;
  border: 1px solid #333;
  cursor: pointer;
  font-size: 0.8rem;
}
.actions-item {
  cursor: pointer;
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

@media only screen and (max-width: 600px) {
  .feeds {
    padding: 0 1rem;
  }
}

@media only screen and (min-width: 601px) and (max-width: 1000px) {
  .feeds {
    padding: 0 1rem;
  }
}
</style>
