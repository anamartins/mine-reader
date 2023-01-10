<script setup>
import SeeUnread from './seeUnread.vue'

const props = defineProps({
  title: String,
  tags: Array
})
</script>
<template>
  <div class="filter-bar">
    <div class="title">{{ props.title }}</div>
    <div class="tags">
      <span v-for="tag in tags">{{ tag }}</span>
    </div>
    <SeeUnread />
  </div>
</template>
<style scoped></style>
