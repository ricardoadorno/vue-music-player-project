<script setup lang="ts">
import PlayerContainer from "./container/PlayerContainer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <main class="main">
    <router-view v-slot="{ Component }">
      <!-- <transition name="fade" mode="out-in"> // TODO Fix transition-->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </main>

  <PlayerContainer class="player" />
</template>

<style scoped>
.player {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.main {
  display: flex;
  width: 100%;
}
/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
