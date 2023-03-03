<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import vClickOutside from '../../directives/vClickOutside'
import SidebarProfileCard from './SidebarProfileCard.vue'
import SidebarFeedItem from './SidebarFeedItem.vue'
import SidebarTagItem from './SidebarTagItem.vue'

import { useFeedsStore } from '../../stores/feeds'
import { useTagsStore } from '../../stores/tags'
import Loading from '../../components/Loading/Loading.vue'

const route = useRoute()

const currentFeed = computed(() => route.params.feed)
const currentTag = computed(() => route.params.tag)

const feedsStore = useFeedsStore()
feedsStore.getFeeds()

const emit = defineEmits(['onLinkClick'])

const feeds = computed(() => feedsStore.feeds)
const totalFeeds = computed(() => feedsStore.total)
const isLoadingFeeds = computed(() => feedsStore.isLoading)

const hasNoFeed = computed(() => feeds.value.length === 0)
const hasNoTag = computed(() => tags.value.length === 0)

const tagsStore = useTagsStore()
tagsStore.getTags()
const tags = computed(() => tagsStore.tags)
const isLoadingTags = computed(() => tagsStore.isLoading)

function onClick() {
  emit('onLinkClick')
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__section">
      <section class="sidebar__item">
        <p>
          <router-link :to="{ name: 'home' }" @click="onClick">
            all feeds ({{ totalFeeds }})
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'manageFeed' }">
            manage mine feeds
          </router-link>
        </p>
        <div class="loading" v-if="isLoadingFeeds"><Loading /></div>
        <ul class="sidebar__list">
          <p v-if="hasNoFeed" class="no-feed">
            You have no feeds yet. Click in "add feed" in the bar below.
          </p>
          <SidebarFeedItem
            v-for="feed in feeds"
            :feed="feed"
            :selected="feed.feedId === currentFeed"
            @click="onClick"
          />
        </ul>
      </section>

      <section class="sidebar__item">
        <h2 class="sidebar__heading">tags</h2>
        <p>
          <router-link :to="{ name: 'manageTag' }">manage tags</router-link>
        </p>
        <div class="loading" v-if="isLoadingTags"><Loading /></div>
        <ul class="sidebar__list">
          <p v-if="hasNoTag" class="no-tag">
            You have no tags yet. Click in "manage tags" up here and make your
            first tag.
          </p>
          <SidebarTagItem
            v-for="tag in tags"
            :tag="tag"
            :selected="tag.id === currentTag"
            @click="onClick"
          />
        </ul>
      </section>
    </div>
    <SidebarProfileCard class="profile-card" />
  </aside>
</template>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: 1px;
}
::-webkit-scrollbar-track {
  background: #ddd;
}

.sidebar {
  position: sticky;
  display: flex;
  flex-flow: row wrap;
  top: 4rem;
  left: 0;
  width: 15rem;
  height: 90vh;
  margin: 0;
  padding: 0 1rem 0 0.5rem;
  &__heading,
  &__heading:link,
  &__heading:visited {
    font-size: 1.5rem;
    font-weight: 700;
  }
}

p a {
  font-weight: 400;
}
.sidebar__heading {
  font-weight: 400;
}
.sidebar__section {
  overflow-y: scroll;
  flex: 1;
  height: calc(100% - 3rem);
}

.sidebar__list {
  font-size: 0.8rem;
  list-style-type: none;
  margin-bottom: 3rem;
}

.sidebar__list:target {
  max-height: 10rem;
}

.sidebar__item {
  margin: 5% 5% 5% 0;
}

.tag__item {
  line-height: 1.2rem;
}

.tag__link {
  color: var(--darkText);
  padding: 0.2rem;
}

.tag__link--selected {
  background-color: var(--secondary-color);
  color: white;
}

.loading {
  position: relative;
  margin: 1rem;
}

.background {
  background-color: deeppink;
  width: 100vh;
  height: 100vh;
  position: fixed;
}
@media only screen and (max-width: 1000px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
  .sidebar {
    position: fixed;
    left: -100%;
    top: 2rem;
    padding: 0.1rem 0 0 0.5rem;
  }
}
</style>
