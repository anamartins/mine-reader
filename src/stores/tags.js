import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useTagsStore = defineStore('tags', () => {
  const tags = ref([])
  const total = ref(0)
  const readLater = ref(0)
  const { getApi, postApi } = useApi()

  async function getTags() {
    try {
      const returnAPI = await getApi(`user/tags`)
      tags.value = returnAPI.data.tags
      readLater.value = returnAPI.data.readLater
      total.value = returnAPI.data.total
    } catch (error) {
      //todo
      console.log('show an error message', error)
    }
  }

  async function addTag(feeds, tag) {
    let promises = feeds.map((feedId) =>
      postApi(`user/feeds/${feedId}/tags`, { tag: tag })
    )
    await Promise.all(promises)
    getTags()
  }

  async function removeTag(id) {}

  return { getTags, addTag, removeTag, tags, total, readLater }
})
