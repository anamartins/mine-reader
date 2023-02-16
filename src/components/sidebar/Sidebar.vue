<script setup>
import { computed } from 'vue'
import SidebarProfileCard from './SidebarProfileCard.vue'
import SidebarFeedItem from './SidebarFeedItem.vue'
import { useFeedsStore } from '../../stores/feeds'
import { useTagsStore } from '../../stores/tags'
import Loading from '../../components/Loading/Loading.vue'

const feedsStore = useFeedsStore()
feedsStore.getFeeds()

const emit = defineEmits('onLinkClick')

const feeds = computed(() => feedsStore.feeds)
const totalFeeds = computed(() => feedsStore.total)
const isLoadingFeeds = computed(() => feedsStore.isLoading)

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
        <h2 class="sidebar__heading">feeds</h2>
        <p>
          <router-link :to="{ name: 'home' }">
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
          <SidebarFeedItem
            v-for="feed in feeds"
            :feed="feed"
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
          <li v-for="tag in tags" :key="tag.id" class="tag__item">
            <router-link
              v-if="tag.text"
              :to="{ name: 'tag', params: { tag: tag.text } }"
              >{{ tag.text }} ({{ tag.unread }})</router-link
            >
          </li>
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

.loading {
  position: relative;
  margin: 1rem;
}

@media only screen and (max-width: 1000px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
  .sidebar {
    position: absolute;
    left: -100%;
    top: 0;
    padding: 0.1rem 0 0 0.5rem;
  }
}
</style>
