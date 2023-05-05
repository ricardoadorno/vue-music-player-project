<script setup lang="ts">
import PlayerContainer from "./container/PlayerContainer.vue";
</script>

<template>
  <h1 class="text-center">Vue Music Player</h1>
  <PlayerContainer class="player" />
</template>

<style scoped>
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
