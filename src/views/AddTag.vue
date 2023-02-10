<script setup>
import { ref, computed } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import Checkbox from '../components/Checkbox.vue'
import SelectList from '../components/SelectList.vue'

const tag = ref('')

const selectedTags = ref('')
const selected = ref([])
const isModalOpen = ref(false)

const feedsStore = useFeedsStore()
const feeds = computed(() => feedsStore.feeds)

const tagsStore = useTagsStore()
const tags = computed(() => tagsStore.tags)

async function onAddSelectedTags() {
  await tagsStore.addMultipleTags(selected.value, selectedTags.value)
  // tag.value = ''
  // selected.value = []
  isModalOpen.value = false
  console.log('here', selected.value)
  console.log('tag', selectedTags.value)
}

async function onAddSingleTag() {
  await tagsStore.addSingleTag(selected.value, tag.value)
  // tag.value = ''
  // selected.value = []
  isModalOpen.value = false
  console.log('here', selected.value)
  console.log('tag', tag.value)
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
  console.log('addtag!', selected)
  selectedTags.value = selected
}
</script>
<template>
  <PageWithSidebar>
    <div class="add-tag">
      <SelectList
        title="Select a tag"
        :items="tags"
        @on-item-change="onSelectListChange"
      >
        <div class="actions">
          <ul>
            <li @click="createNewTagClick()" class="actions-item">
              create a new tag
            </li>
          </ul>
        </div>
      </SelectList>

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
      <button type="button" @click="onAddSelectedTags">
        + add in this tag
      </button>

      <div v-if="isModalOpen" class="modal">
        <div class="exit-modal" @click="onExitClick">X</div>
        <label
          >add the tag
          <input type="text" v-model="tag" />
          <button type="button" @click="onAddSingleTag">+ add tag</button>
        </label>
      </div>
    </div>
  </PageWithSidebar>
</template>
<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  overflow: auto;
  background-color: #fff;
  border: 1px solid;
  padding: 1rem;
}
.exit-modal {
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #333;
  font-size: 1.5rem;
}
.exit-modal:hover {
  background-color: var(--primary-color);
  color: #fff;
}
.actions {
  border-top: 1px solid #333;
  padding: 0.5rem;
}
.actions-item {
  cursor: pointer;
  /* width: calc(100% - 1rem); */
  padding: 0.5rem;
}
.actions-item:hover {
  background-color: #eee;
}

ul li {
  list-style: none;
}

h2 {
  font-size: 1rem;
}
</style>
