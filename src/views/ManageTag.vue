<script setup>
import { ref, computed } from 'vue'
import { useTagsStore } from '../stores/tags'
import { useFeedsStore } from '../stores/feeds'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import Checkbox from '../components/Checkbox.vue'
import InputText from '../components/InputText.vue'
import SimpleButton from '../components/SimpleButton.vue'

const tag = ref('')
const selected = ref([])
const isModalOpen = ref(false)

const feedsStore = useFeedsStore()
const feeds = computed(() => feedsStore.feeds)

const tagsStore = useTagsStore()
const tags = computed(() => tagsStore.tags)

async function onAddButtonClick() {
  await tagsStore.addTag(selected.value, tag.value)
  tag.value = ''
  selected.value = []
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

async function onAddSingleTag() {
  await tagsStore.addSingleTag(selected.value, tag.value)
  tag.value = ''
  selected.value = []
  isModalOpen.value = false
}
</script>
<template>
  <!-- <div class="wrapper"> -->
  <PageWithSidebar>
    <div class="manage-tag">
      <h2>Manage Tags</h2>
      <div class="actions">
        <ul>
          <li @click="createNewTagClick()" class="actions-item">
            create a new tag
          </li>
        </ul>
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
  <!-- </div> -->
</template>
<style scoped>
.actions {
  position: relative;
  border: 1px solid #333;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 0.5rem 0;
}
.actions-item {
  cursor: pointer;
  padding: 0.5rem;
}
.actions-item:hover {
  background-color: #eee;
}

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

ul li {
  list-style: none;
}

h2 {
  font-size: 1rem;
}
</style>
