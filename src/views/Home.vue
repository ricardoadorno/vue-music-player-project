<script setup lang="ts">
import PlaylistsArrayContainer from "../container/PlaylistsArrayContainer.vue";
import PlayListContainer from "../container/PlaylistsContainer.vue";
</script>

<template>
  <PlaylistsArrayContainer class="playlist-array-list" />
  <PlayListContainer class="playlist" />
</template>

<style scoped>
.playlist-array-list {
  flex: 3;
  background-color: #272727;
  color: white;
}

.playlist {
  flex: 12;
}
</style>
