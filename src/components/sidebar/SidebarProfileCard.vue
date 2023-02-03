<script setup>
import { useUsersStore } from '../../stores/users'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import Icon from '../Icon.vue'
import ReadLaterIcon from '../../assets/img/read-later.svg'
import UserIcon from '../../assets/img/user.svg'
import AddFeedIcon from '../../assets/img/add-feed.svg'

const router = useRouter()
const usersStore = useUsersStore()
usersStore.getUser()
const user = usersStore.user
const isLoading = computed(() => usersStore.isLoading)

function onSignOut(e) {
  localStorage.removeItem('mineToken')
  router.push({ name: 'signIn' })
}
</script>

<template>
  <div class="profile-card-wrapper">
    <div class="loading" v-if="isLoading">Loading</div>
    <div class="user-data">
      <Icon :image-source="AddFeedIcon" linkName="addFeed" class="icon" />
      <Icon :image-source="ReadLaterIcon" linkName="readLater" class="icon" />
      <Icon :image-source="UserIcon" linkName="profile" class="icon" />
      <button class="classic-button" type="button" @click="onSignOut">
        Sign out
      </button>
    </div>
  </div>
</template>

<style scoped>
.profile-card-wrapper {
  width: 100%;
  padding: 1%;
  background-color: var(--surface-color);
  border: 1px solid #333;
}

.user-data {
  font-size: 15px;
  margin: 1% 0;
  position: relative;
  display: flex;
  justify-content: space-around;
}

.classic-button {
  display: block;
  margin: 5% 0px 0px 0px;
  padding: 5px 10px;
}

.icon {
  position: relative;
  padding: 0 1%;
  height: 100%;
}

.icon:hover {
  background-color: var(--primary-color-variation);
}
</style>
