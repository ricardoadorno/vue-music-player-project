<script setup lang="ts">
import { ref } from "vue";

const musicUrl =
  "https://ia800605.us.archive.org/32/items/Mp3Playlist_555/AaronNeville-CrazyLove.mp3";

const playing = ref(false);
const currentTime = ref(0);
const duration = ref(50);
const songName = ref("Crazy Love - Aaron Neville");

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
  <div class="bg-amber-darken-4 px-8 pt-1">
    <div class="player-topside">
      <div>{{ songName }}</div>

      <div class="d-flex justify-center align-center">
        <v-icon class="pointer">fas fa-step-backward</v-icon>
        <v-btn class="ma-2 pa-2" icon @click="playOrPause">
          <v-icon>{{ playing ? "fas fa-pause" : "fas fa-play" }}</v-icon>
        </v-btn>
        <v-icon class="pointer">fas fa-step-forward</v-icon>
      </div>

      <div>
        Volume:
        <v-slider track-color="white"> </v-slider>
      </div>
    </div>

    <!-- <div class="player-downside">
      <div>{{ toMinutes(currentTime) }}/{{ toMinutes(duration) }}</div>

      <v-slider track-color="white" />
    </div> -->
  </div>
</template>

<style scoped>
.player-topside {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.player-topside > * {
  flex-basis: 8rem;
}

.player-downside {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.pointer {
  cursor: pointer;
}
</style>
```
