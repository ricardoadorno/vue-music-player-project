<script setup lang="ts"></script>

<template>
  <v-list>
    <h2 class="text-center pa-2">Playlists</h2>
    <v-list-item
      class="pa-1"
      v-for="(item, index) in $store.state.PlaylistsArray"
      :key="item.id"
      :value="index"
    >
      <v-list-item-title class="ma-4">{{ item.name }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped></style>
