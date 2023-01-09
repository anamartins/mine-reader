<script setup>
import SeeUnread from './seeUnread.vue'

const props = defineProps({
  title: String
})
</script>
<template>
  <div class="filter-bar">
    <div class="title">{{ props.title }}</div>
    <SeeUnread />
  </div>
</template>
<style scoped></style>
