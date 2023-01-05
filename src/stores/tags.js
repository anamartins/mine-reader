import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useTagsStore = defineStore('tags', () => {
  const tags = ref([])
  const total = ref(0)
  const readLater = ref(0)
  const { getApi, postApi } = useApi()

  async function getTags() {
    const returnAPI = await getApi(`user/tags`)
    tags.value = returnAPI.data.tags
    readLater.value = returnAPI.data.readLater
    total.value = returnAPI.data.total
  }

  async function addTag(selected, tag) {
    let promises = selected.map((feedId) =>
      postApi(`user/feeds/${feedId}/tags`, { tag: tag })
    )
    await Promise.all(promises)
    getTags()
  }

  return { getTags, addTag, tags, total, readLater }
})
