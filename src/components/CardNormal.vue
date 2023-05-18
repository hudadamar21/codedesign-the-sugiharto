<script setup>
defineProps({
  title: String,
  subTitle: String,
  image: String,
})
</script>

<template>
  <div class="p-5 pb-7 rounded-lg text-center">
    <img :src="image" class="aspect-video w-full rounded-lg mb-7" :alt="title" />
    <h2 class="mb-3">
      {{ title }}
    </h2>
    <p class="text-xs text-white/60 uppercase">{{ subTitle }}</p>
  </div>
</template>
