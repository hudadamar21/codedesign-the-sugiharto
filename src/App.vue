<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="main-container flex items-center justify-between py-16">
    <nav class="flex items-center gap-x-16">
      <RouterLink to="/"><img src="/images/logo.svg" alt="logo" /></RouterLink>
      <RouterLink to="/overview" class="font-medium tracking-wide text-white/60 hover:text-white transition">Overview</RouterLink>
      <RouterLink to="/skills" class="font-medium tracking-wide text-white/60 hover:text-white transition">Skills</RouterLink>
      <RouterLink to="/projects" class="font-medium tracking-wide text-white/60 hover:text-white transition">Projects</RouterLink>
      <RouterLink to="/contact" class="font-medium tracking-wide text-white/60 hover:text-white transition">Contact</RouterLink>
    </nav>
    <RouterLink to="/contact" class="bg-primary-green px-8 py-3.5 rounded-md">
      Punya Project?
    </RouterLink>
  </header>

  <RouterView />
</template>
