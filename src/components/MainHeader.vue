<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import IconMenu from './icons/IconMenu.vue'

const open = ref(false)

const route = useRoute()

const currentPath = computed(() => route.path.replace('/', ''))
</script>

<template>
  <header class="main-container flex items-center justify-between py-8 md:py-16">
    <div class="flex items-center gap-x-8 md:gap-x-16">
      <RouterLink @click="open = false" class="relative z-30 flex items-center gap-x-3" to="/">
        <img class="w-8 lg:w-14 h-8 lg:h-14" src="/images/logo.svg" alt="logo" />
        <p class="block lg:hidden font-semibold mt-0.5 tracking-widest text-sm">The Sugiharto</p>
      </RouterLink>
      <nav
        class="absolute lg:static top-0 left-0 flex flex-col lg:flex-row w-full pt-28 pb-12 space-y-8 lg:space-y-0 lg:py-0 bg-dark z-20 items-center gap-x-8 md:gap-x-16 transition-transform duration-500"
        :class="!open ? '-translate-y-[150%] lg:translate-y-0' : 'translate-y-0'"
      >
        <RouterLink
          @click="open = false"
          to="/overview"
          class="font-medium tracking-wide hover:text-white transition"
          :class="currentPath === 'overview' ? 'text-white' : 'text-white/60'"
          >Overview</RouterLink
        >
        <RouterLink
          @click="open = false"
          to="/skills"
          class="font-medium tracking-wide hover:text-white transition"
          :class="currentPath === 'skills' ? 'text-white' : 'text-white/60'"
          >Skills</RouterLink
        >
        <RouterLink
          @click="open = false"
          to="/projects"
          class="font-medium tracking-wide hover:text-white transition"
          :class="currentPath === 'projects' ? 'text-white' : 'text-white/60'"
          >Projects</RouterLink
        >
        <RouterLink
          @click="open = false"
          to="/contact"
          class="font-medium tracking-wide hover:text-white transition"
          :class="currentPath === 'contact' ? 'text-white' : 'text-white/60'"
          >Contact</RouterLink
        >
        <RouterLink
          @click="open = false"
          to="/contact"
          class="block lg:hidden relative z-30 bg-primary-green text-sm lg:text-base px-4 lg:px-8 py-2 lg:py-3 rounded-md"
        >
          Punya Project?
        </RouterLink>
      </nav>
    </div>
    <div class="flex items-center gap-x-5">
      <RouterLink
        @click="open = false"
        to="/contact"
        class="hidden lg:block relative z-30 bg-primary-green text-sm lg:text-base px-4 lg:px-8 py-2 lg:py-3 rounded-md"
      >
        Punya Project?
      </RouterLink>
      <button
        class="relative z-30 hover:opacity-80 transition lg:hidden mt-1"
        @click="open = !open"
      >
        <IconMenu />
      </button>
    </div>
  </header>
</template>
