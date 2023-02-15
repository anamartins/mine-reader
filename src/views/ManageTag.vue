<script setup>
import { ref, computed } from 'vue'
import { useTagsStore } from '../stores/tags'
import PageWithSidebar from '../components/PageWithSidebar.vue'
import InputText from '../components/InputText.vue'
import SimpleButton from '../components/SimpleButton.vue'
import FeedTable from '../components/FeedTable.vue'
import Loading from '../components/loading/Loading.vue'

const tag = ref('')
const selected = ref([])
const isModalOpen = ref(false)

const tagsStore = useTagsStore()
const tags = computed(() => tagsStore.tags)
const isLoading = computed(() => tags.isLoading)

async function onRemoveButtonClick(params) {
  await tagsStore.deleteTag(params.tag)
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
  <PageWithSidebar>
    <div class="manage-tag">
      <div class="tool-bar">
        <div class="actions">
          <ul>
            <li @click="createNewTagClick()" class="actions-item">
              create a new tag
            </li>
          </ul>
        </div>
      </div>

      <div class="remove-tag">
        <h2>Manage Tags</h2>
        <Loading v-if="isLoading" class="loading" />
        <FeedTable
          :list="tags"
          :isCheckboxVisible="false"
          @on-button-click="onRemoveButtonClick"
          buttonLabel="delete tag"
        ></FeedTable>
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
.manage-tag {
  width: 100%;
}

.loading {
  position: relative;
  top: 25%;
  left: 25%;
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

.tool-bar {
  border: 1px solid #333;
  width: calc(100% - 2rem);
  padding: 1rem;
  display: flex;
  margin-bottom: 1rem;
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

@media only screen and (max-width: 1000px) {
  .remove-tag {
    margin: 0 1rem;
  }
}
</style>
