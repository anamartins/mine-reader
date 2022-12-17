<script setup>
import { computed } from 'vue'
import Logo from './logo.vue'
import { useFeedsStore } from '../stores/feeds'

let feedsStore = useFeedsStore()
feedsStore.getFeeds()

let feeds = computed(() => feedsStore.feeds)
let totalFeeds = computed(() => feedsStore.total)
let readLater = computed(() => feedsStore.readLater)
</script>

<template>
  <div class="sidebar">
    <Logo link="home" />
    <section class="side-sub">
      <h2>
        <router-link :to="{ name: 'home' }"
          >all feeds ({{ totalFeeds }})</router-link
        >
      </h2>
      <p><router-link to="/feed/add">add a new feed</router-link></p>
      <ul class="allfeeds-list">
        <li v-for="feed in feeds" class="feed" v-bind:key="feed.id">
          <router-link
            :to="{
              name: 'feed',
              params: { feed: feed.feedId }
            }"
          >
            {{ feed.title }} ({{ feed.unread }})
          </router-link>
        </li>
      </ul>
    </section>
    <section class="read-later">
      <router-link :to="{ name: 'readLater' }"
        ><h2>Read Later ({{ readLater }})</h2></router-link
      >
    </section>
    <section class="side-sub">
      <h2>tags</h2>
      <ul>
        <li>tag1</li>
        <li>tag2</li>
      </ul>
    </section>
    <section class="side-sub">
      <h2>mine</h2>
      <ul>
        <li>read later ({{ readLater }})</li>
        <li>one</li>
        <li>two</li>
      </ul>
    </section>
    <section class="side-sub">
      <h2>theirs</h2>
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.sidebar {
  width: 20%;
  /* height: 100vh; */
  position: sticky;
  padding: 0 1%;
  margin: 0 1% 0 0;
}
h2 {
  font-size: 30px;
  font-weight: 700;
}
ul {
  font-size: 20px;
  font-weight: 400;
  list-style-type: none;
}
.side-sub {
  margin: 5% 5% 5% 0;
}
</style>
