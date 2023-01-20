<script setup>
import { computed } from 'vue'
import Logo from '../Logo.vue'
import SidebarProfileCard from './SidebarProfileCard.vue'
import SidebarFeedItem from './SidebarFeedItem.vue'
import { useFeedsStore } from '../../stores/feeds'
import { useTagsStore } from '../../stores/tags'

const feedsStore = useFeedsStore()
feedsStore.getFeeds()

const feeds = computed(() => feedsStore.feeds)
const totalFeeds = computed(() => feedsStore.total)
const readLater = computed(() => feedsStore.readLater)

const tagsStore = useTagsStore()
tagsStore.getTags()
const tags = computed(() => tagsStore.tags)
</script>

<template>
  <div class="sidebar">
    <Logo link="home" />
    <section class="side-sub">
      <h2 class="sidebar__heading">
        <router-link :to="{ name: 'home' }">
          all feeds ({{ totalFeeds }})
        </router-link>
      </h2>
      <p><router-link :to="{ name: 'addFeed' }">add a new feed</router-link></p>
      <ul class="sidebar__list">
        <SidebarFeedItem v-for="feed in feeds" :feed="feed" />
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
        <li v-for="tag in tags" :key="tag.id">
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
      </ul>
    </section>
    <section class="side-sub">
      <h2>theirs</h2>
      <ul>
        <li>one</li>
        <li>two</li>
      </ul>
    </section>
    <SidebarProfileCard class="profile-card" />
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  width: 20%;
  max-width: 300px;
  height: 100%;
  top: 0;
  padding: 0 1%;
  margin: 0 1% 0 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ccc;

  &__heading,
  &__heading:link,
  &__heading:visited {
    font-size: 30px;
    font-weight: 700;
  }
}

.sidebar__list {
  height: 20vh;
  overflow-y: scroll;
  font-size: 15px;
  font-weight: 400;
  list-style-type: none;
}

.side-sub {
  margin: 5% 5% 5% 0;
}

.profile-card {
  position: fixed;
  bottom: 0px;
  left: 1%;
  height: 5%;
}
</style>
