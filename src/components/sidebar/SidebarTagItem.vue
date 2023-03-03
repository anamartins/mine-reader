<script setup>
const props = defineProps({
  tag: { type: Object, required: true },
  selected: { type: Boolean, default: false }
})
</script>

<template>
  <li class="tag" :key="tag.id" :class="{ 'tag--selected': selected }">
    <router-link
      class="tag__name"
      :to="{
        name: 'tag',
        params: { tag: tag.id }
      }"
    >
      {{ tag.text }}
    </router-link>
    <span class="tag__unread">({{ tag.unread }})</span>
  </li>
</template>

<style scoped lang="scss">
.tag {
  // margin: 0.1rem 0 0.1rem 0;
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  color: #333;
}
.tag--selected {
  font-weight: 500;
  // color: white;
}

.tag__name {
  flex: 1;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag__unread {
  margin-left: 0.3rem;
}
</style>
