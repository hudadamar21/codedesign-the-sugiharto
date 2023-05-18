<script setup>
defineProps({
  name: String
})
</script>

<template>
  <div class="relative mb-7">
    <h1 class="realtive z-10 text-4xl font-bold">{{ name }}</h1>
    <div class="absolute -top-9 -left-16 text-[100px] font-bold opacity-[3%] leading-none">
      {{ name }}
    </div>
  </div>
</template>
