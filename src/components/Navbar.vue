<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <h1>Vue Music Player</h1>
    <div>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </div>
    <div>By Ricardo Adorno</div>
  </nav>
</template>

<style>
.navbar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
}
</style>
