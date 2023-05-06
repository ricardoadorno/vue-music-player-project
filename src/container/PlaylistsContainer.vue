<script setup lang="ts">
import { ref } from "vue";

const playlistName = ref("Playlist Name");

import store from "../store";

const items = ref([
  { title: "Playlist 1" },
  { title: "Playlist 2" },
  { title: "Playlist 3" },
  { title: "Playlist 4" },
]);
</script>

<template>
  <div class="mt-8 mx-8">
    <div class="playlist-content">
      <img src="https://placehold.it/350x350" />
      <v-list class="list">
        <h2 class="ma-4">{{ playlistName }}</h2>

        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          prepend-icon="fas fa-music"
          active-color="amber"
        >
          <v-list-item-title class="ma-4">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped>
.playlist-content {
  display: flex;
  justify-content: flex-start;
  background-color: rgb(22, 19, 53);
  padding: 2rem;
  border-radius: 1rem;
  gap: 1rem;
}

.list {
  background-color: rgb(35, 28, 114);
  color: white;
  border-radius: 1rem;
  width: 100%;
}
</style>
