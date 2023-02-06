<script setup>
import { ref, watch } from 'vue'

const isIconShown = ref(true)
const IMG_BASE_URL = 'https://storage.cloud.google.com/rss-reader/'

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
    class="feed__icon"
    :src="IMG_BASE_URL + props.icon"
    @error="onError"
  />
  <img class="feed__icon" v-else src="../../assets/img/pink.png" />
</template>

<style scoped lang="scss">
.feed__icon {
  position: relative;
  width: 5%;
  margin: 0 0.5rem 0 0;
}
</style>
