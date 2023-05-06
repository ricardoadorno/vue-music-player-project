<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "Playlist 1" },
  { title: "Playlist 2" },
  { title: "Playlist 3" },
  { title: "Playlist 4" },
]);
</script>

<template>
  <v-list>
    <h2 class="text-center pa-2">Playlists</h2>
    <v-list-item
      class="pa-1"
      v-for="(item, index) in items"
      :key="index"
      :value="index"
    >
      <v-list-item-title class="ma-4">{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped></style>
