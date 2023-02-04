<script setup>
const props = defineProps({
  imageSource: { type: String, required: true },
  linkName: { type: String, required: false }
})
</script>
<template>
  <div class="icon">
    <router-link class="icon__link" :to="{ name: props.linkName }">
      <img :src="props.imageSource" class="icon__img" inline />
    </router-link>
  </div>
</template>
<style scoped lang="scss">
.icon {
  width: 10%;
}
.icon__img {
  width: 100%;
  height: 100%;
  svg {
    path {
      fill: var(--primary-color);
    }
  }
}
</style>
