<script setup lang="ts">
import { ref } from "vue";

const playing = ref(false);
const currentTime = ref(0);
const duration = ref(50);

function toMinutes(time: number) {
  const minutes = Math.floor(time / 60);

  const seconds = Math.floor(time % 60);

  if (seconds < 10) return `${minutes}:0${seconds}`;

  return `${minutes}:${seconds}`;
}

function playOrPause() {
  playing.value = !playing.value;
}
</script>

<template>
  <div class="w-50 ma-auto">
    <div class="d-flex justify-center align-center">
      <v-icon class="pointer">fas fa-step-backward</v-icon>
      <v-btn class="ma-2 pa-2" icon @click="playOrPause">
        <v-icon>{{ playing ? "fas fa-pause" : "fas fa-play" }}</v-icon>
      </v-btn>
      <v-icon class="pointer">fas fa-step-forward</v-icon>
    </div>

    <div>{{ toMinutes(currentTime) }}/{{ toMinutes(duration) }}</div>

    <v-slider track-color="white"> </v-slider>

    <!-- <audio
      ref="audio"
      :src="src"
      @timeupdate="updateTime"
      @ended="ended"
    ></audio> -->
  </div>
</template>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
```
