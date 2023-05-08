<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <h1>Vue Music Player</h1>

    <div class="navbar-left">
      <router-link class="nav-link" to="/">Playlists</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
      <div class="horizontal-divider" />
      By Ricardo Adorno
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.5rem;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.horizontal-divider {
  width: 1px;
  height: 1.5rem;
  background-color: #fff;
}

.nav-link {
  color: dodgerblue;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
