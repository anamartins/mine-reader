<script setup>
import { useUsersStore } from '../../stores/users'
import { useFeedsStore } from '../../stores/feeds'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import Icon from './SidebarCardIcon.vue'
import ReadLaterIcon from '../../assets/img/read-later.svg'
import UserIcon from '../../assets/img/user.svg'
import AddFeedIcon from '../../assets/img/add-feed.svg'
import SignOut from '../../assets/img/signout.svg'

const router = useRouter()
const usersStore = useUsersStore()
usersStore.getUser()

const feedsStore = useFeedsStore()
const readLater = computed(() => feedsStore.readLater)

function onSignOut() {
  localStorage.removeItem('mineToken')
  router.push({ name: 'signIn' })
}
</script>

<template>
  <div class="profile-card-wrapper">
    <div class="user-data">
      <Icon
        :image-source="AddFeedIcon"
        linkName="addFeed"
        class="icon"
        tooltip="add feed"
      />
      <Icon
        :image-source="ReadLaterIcon"
        linkName="readLater"
        params="{readLater: true}"
        class="icon"
        :number="readLater"
        tooltip="read later"
      />
      <Icon
        :image-source="UserIcon"
        linkName="profile"
        class="icon"
        tooltip="profile"
      />
      <icon
        :image-source="SignOut"
        class="icon"
        tooltip="sign out"
        @click="onSignOut"
      />
    </div>
  </div>
</template>

<style scoped>
.profile-card-wrapper {
  width: calc(100% - 0.4rem);
  padding: 1% 1% 3% 1%;
  margin: 0 0.2rem 0 0;
  background-color: var(--primary-color);
}

.user-data {
  height: 100%;
  font-size: 0.5rem;
  margin: 1% 0;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.icon {
  position: relative;
  padding: 0 1rem;
  height: 100%;
  width: 1.5rem;
}

.icon img {
  fill: #fff;
}

.icon:hover {
  background-color: var(--primary-color-variation);
}
</style>
