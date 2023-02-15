<script setup></script>

<template>
  <div class="all">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.all {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.wrapper {
  width: calc(100% - 2rem);
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

@media only screen and (max-width: 600px) {
  .wrapper {
    width: 100%;
  }

  .all {
    justify-content: flex-start;
  }
}
@media only screen and (min-width: 601px) and (max-width: 1000px) {
  .all {
    justify-content: flex-start;
  }
  .wrapper {
    width: 100%;
  }
}
@media only screen and (min-width: 1001px) {
}
</style>
