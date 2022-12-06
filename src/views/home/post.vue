<script setup>
import { onMounted, computed, defineProps } from 'vue'

const props = defineProps({
  post: { type: Object, required: true }
})
</script>

<template>
  <div class="post">
    <base target="_blank" />
    <div class="post-title">
      <a :href="post.link">{{ post.title }}</a>
    </div>
    <div class="post-source">{{ post.feed.title }}</div>
    <div class="post-date">{{ post.pubDate }}</div>
    <div class="post-content" v-html="post.content"></div>
  </div>
</template>

<style scoped>
.post {
  border: 1px solid black;
  margin: 1% 0;
  padding: 1%;
  width: 100%;
}

.post-title a {
  color: #000;
}

.post-title {
  font-size: 20px;
  font-weight: 700;
}
</style>
