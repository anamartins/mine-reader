<script setup>
import { ref, watch } from 'vue'

const isIconShown = ref(true)
const IMG_BASE_URL = 'https://storage.googleapis.com/rss-reader/'

const props = defineProps({
  icon: {
    type: String
  }
})

watch(
  () => props.icon,
  () => {
    isIconShown.value = true
  }
)

function onError() {
  isIconShown.value = false
}
</script>

<template>
  <img
    v-if="isIconShown"
    class="feed-icon"
    :src="IMG_BASE_URL + props.icon"
    @error="onError()"
  />
  <img v-else class="feed-icon feed-icon--error" src="../assets/img/pink.png" />
</template>

<style scoped lang="scss">
.feed-icon {
  position: relative;
  width: 5%;
  margin: 0 0.5rem 0 0;
}

.feed-icon--error {
  border-radius: 50%;
}
</style>
