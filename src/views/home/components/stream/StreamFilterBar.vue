<script setup>
import StreamSeeUnread from './StreamSeeUnread.vue'

const props = defineProps({
  title: { type: String },
  tags: { type: Array }
})
</script>
<template>
  <div class="filter-bar">
    <div class="title">{{ props.title }}</div>
    <div class="tags">
      <span v-for="tag in tags">{{ tag }}</span>
    </div>
    <StreamSeeUnread />
  </div>
</template>
<style scoped></style>
