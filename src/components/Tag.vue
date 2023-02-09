<script setup>
const props = defineProps({
  tag: { type: String, required: true },
  isCloseButtonVisible: { type: Boolean, required: false, default: false }
})

async function onCloseButtonClick(tag) {
  await tagsStore.removeTagFromFeed(props.feedId, tag)
}
</script>
<template>
  <div class="tag">
    {{ props.tag }}
    <button
      class="close"
      @click="onCloseButtonClick(tag)"
      v-if="isCloseButtonVisible"
    >
      X
    </button>
  </div>
</template>

<style scoped>
.tag {
  margin: 0.3rem 1rem 0 0;
  padding: 0.3rem;
  background-color: var(--secondary-color-variation);
  color: #fff;
  font-size: 0.7rem;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
  position: relative;

  align-items: center;
}

.close {
  background-color: var(--secondary-color-variation);
  cursor: pointer;
  margin: 0 0 0 0.3rem;
  border: 0;
  color: #fff;
  font-size: 0.7rem;
}
</style>
