<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div class="fixed bottom-5 left-5">
    <button
      @click="open = !open"
      class="h-10 w-10 rounded-full bg-white text-black/60 flex items-center justify-center hover:scale-105 transition cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44c.91-1.29.4-3.7-2.18-3.7c-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41c.7 1.15 1.11 3.3.03 4.9c-1.2 1.77-2.35 2.31-2.97 3.45c-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2z"
        />
      </svg>
    </button>

    <Transition>
      <div
        v-if="open"
        class="absolute bottom-full mb-4 p-6 rounded-xl left-0 space-y-3 bg-white shadow-lg text-sm text-black/60"
      >
        <div>
          this website is challenge from: <br />
          <a href="https://codedesign.dev" class="text-black hover:underline" target="_blank"
            >https://codedesign.dev</a
          >
        </div>
        <div>
          design from: <br />
          <a
            href="https://codedesign.dev/the-sugihartos"
            class="text-black hover:underline"
            target="_blank"
            >https://codedesign.dev/the-sugihartos</a
          >
        </div>
        <div>
          github repository: <br />
          <a
            href="https://github.com/hudadamar21/codedesign-the-sugiharto"
            class="text-black hover:underline"
            target="_blank"
            >https://github.com/hudadamar21/codedesign-the-sugiharto</a
          >
        </div>
        <div>
          see more on: <br />
          <a
            href="https://hudadamar21.space/codedesign-challenges"
            class="text-black hover:underline"
            target="_blank"
            >https://hudadamar21.space/codedesign-challenges</a
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
  transition-property: opacity transform;
}

.v-enter-from,
.v-leave-to {
  @apply translate-y-3 opacity-0;
}
</style>
