<script setup>
defineProps({
  title: String,
  subTitle: String,
  image: String,
  subTitleUppercase: Boolean,
  noPadding: Boolean,
  imageHover: Boolean
})

defineEmits(['imageClick'])
</script>

<template>
  <div class="rounded-lg text-center">
    <img
      @click="$emit('imageClick')"
      :src="image"
      class="aspect-video w-full rounded-lg mb-5"
      :class="imageHover ? 'cursor-pointer hover:opacity-80 transition' : ''"
      :alt="title"
    />
    <h2 class="mb-3 tracking-wider">
      {{ title }}
    </h2>
    <p
      class="text-xs text-white/60 px-5 tracking-wider"
      :class="subTitleUppercase ? 'uppercase' : ''"
    >
      {{ subTitle }}
    </p>
  </div>
</template>
