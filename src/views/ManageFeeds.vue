<script setup>
import { ref, computed, watch } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import Checkbox from '../components/Checkbox.vue'
import SelectList from '../components/SelectList.vue'
import InputText from '../components/InputText.vue'
import SimpleButton from '../components/SimpleButton.vue'

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
/* .wrapper {
  width: calc(100% - 2rem);
  max-width: 2000px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
} */
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
</style>
