<script setup>
import { computed } from 'vue'
import Logo from '../logo.vue'
import ProfileCard from './profileCard.vue'
import { useFeedsStore } from '../../stores/feeds'
import { useTagsStore } from '../../stores/tags'

const IMG_BASE_URL = 'https://storage.cloud.google.com/rss-reader/'

let feedsStore = useFeedsStore()
feedsStore.getFeeds()

let feeds = computed(() => feedsStore.feeds)
let totalFeeds = computed(() => feedsStore.total)
let readLater = computed(() => feedsStore.readLater)

let tagsStore = useTagsStore()
tagsStore.getTags()
let tags = computed(() => tagsStore.tags)
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
      <p><router-link :to="{ name: 'addFeed' }">add a new feed</router-link></p>
      <ul class="allfeeds list">
        <li v-for="feed in feeds" class="feed" :key="feed.id">
          <img class="feed-icon" :src="IMG_BASE_URL + feed.icon" />
          <router-link
            class="feed-name"
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
      <router-link :to="{ name: 'readLater' }">
        <h2>Read Later ({{ readLater }})</h2>
      </router-link>
    </section>
    <section class="side-sub">
      <h2>tags</h2>
      <router-link :to="{ name: 'addTag' }">add a new tag</router-link>
      <ul class="alltags list">
        <li v-for="tag in tagsStore.tags" :key="tag.id">
          <router-link
            v-if="tag.text"
            :to="{ name: 'tag', params: { tag: tag.text } }"
            >{{ tag.text }}</router-link
          >
        </li>
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
    <ProfileCard class="profile-card" />
  </div>
</template>

<style scoped>
.sidebar {
  width: 20%;
  height: 100%;
  top: 0;
  padding: 0 1%;
  margin: 0 1% 0 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;
}
h2 {
  font-size: 30px;
  font-weight: 700;
}
ul {
  font-size: 15px;
  font-weight: 400;
  list-style-type: none;
}
.list {
  height: 20vh;
  overflow-y: scroll;
  /* flex: 1; */
}
.feed {
  margin: 2% 0 2% 0;
  display: flex;
  align-items: center;
}

.feed-icon {
  position: relative;
  width: 5%;
  margin: 0% 3% 0% 0;
}
.side-sub {
  margin: 5% 5% 5% 0;
}

.profile-card {
  position: fixed;
  bottom: 0;
  /* left: 0; */
  height: 5%;
}
</style>
