import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '../composables/api'

export const useTagsStore = defineStore('tags', () => {
  const tags = ref([])
  const total = ref(0)
  const readLater = ref(0)
  const isLoading = ref(false)
  const { getApi, postApi, deleteApi } = useApi()

  async function getTags() {
    try {
      isLoading.value = true
      const returnAPI = await getApi(`user/tags`)
      tags.value = returnAPI.data.tags
      readLater.value = returnAPI.data.readLater
      total.value = returnAPI.data.total
    } catch (error) {
      //todo
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function addSingleTag(feeds, newTag) {
    try {
      isLoading.value = true
      const returnAPI = await postApi(`user/tags`, {
        tag: newTag,
        feedIds: feeds
      })
      tags.value.push(returnAPI.data)
      return returnAPI.data
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function addMultipleTags(feeds, newTags) {
    try {
      isLoading.value = true
      const returnAPI = await postApi(`user/tags`, {
        tags: newTags,
        feedIds: feeds
      })
      tags.value.push(returnAPI.data)
      return returnAPI.data
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function deleteTag(id) {
    try {
      isLoading.value = true
      await deleteApi(`user/tags/${id}`)
      tags.value = tags.value.filter((e) => e.id !== id)
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  async function removeTagFromFeed(feedId, tag) {
    await deleteApi(`user/feeds/${feedId}/tags`, { tag })
  }

  return {
    getTags,
    addSingleTag,
    addMultipleTags,
    deleteTag,
    removeTagFromFeed,
    tags,
    total,
    readLater,
    isLoading
  }
})
