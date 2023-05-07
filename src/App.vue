<script setup lang="ts">
import PlayerContainer from "./container/PlayerContainer.vue";
import SongsListContainer from "./container/SongsListContainer.vue";
import PlayListContainer from "./container/PlaylistsContainer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <main class="main">
    <SongsListContainer class="song-list" />
    <PlayListContainer class="playlist" />
  </main>
  <PlayerContainer class="player" />
</template>

<style scoped>
.player {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.song-list {
  flex: 3;
  background-color: #272727;
  color: white;
}

.playlist {
  flex: 12;
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
