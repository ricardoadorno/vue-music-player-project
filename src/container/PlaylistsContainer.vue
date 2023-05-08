<script setup lang="ts">
import PlayList from "../components/Playlist.vue";
</script>

<template>
  <aside>
    <v-list class="playlists-sidebar">
      <h2 class="text-center pa-2">Playlists</h2>
      <v-list-item
        class="pa-1"
        v-for="(item, index) in $store.state.PlaylistsArray"
        :key="item.id"
        :value="index"
        :on-click="() => $store.commit('setCurrentPlaylist', index)"
      >
        <v-list-item-title class="ma-4">{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </aside>
  <PlayList class="playlist" />
</template>

<style scoped>
.playlists-sidebar {
  background-color: rgb(22, 19, 53);
  color: white;
  gap: 1rem;
  height: 100%;
}

aside {
  flex: 3;
}

.playlist {
  flex: 10;
}
</style>
