<script setup>
import { getColors } from '../../utils/colors'
import Logo from '../logo/Logo.vue'
// import Icon from '../Icon.vue'
// import ReadLaterIcon from '../../assets/img/read-later.svg'
// import UserIcon from '../../assets/img/user.svg'
// import AddFeedIcon from '../../assets/img/add-feed.svg'
const colors = getColors()

const primaryColor = colors.primaryColor
const backgroundColor = colors.backgroundColor
</script>
<template>
  <div class="header">
    <Logo font-size="1rem" :font-color="backgroundColor" has-animated-box />

    <!-- <div class="icons">
      <Icon :image-source="AddFeedIcon" linkName="addFeed" class="icon" />
      <Icon :image-source="ReadLaterIcon" linkName="readLater" class="icon" />
      <Icon :image-source="UserIcon" linkName="profile" class="icon" />
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.header {
  background-color: var(--surface-color);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
}
.logo {
  position: relative;
  width: 8%;
}

.icons {
  position: relative;
  display: flex;
  justify-content: flex-end;
  //   width: 30%;
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
