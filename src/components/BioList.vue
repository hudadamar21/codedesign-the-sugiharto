<script setup>
import IconDot from '@/components/icons/IconDot.vue'

defineProps({
  name: String,
  lists: Array
})
</script>

<template>
  <div class="mt-12">
    <h2 class="text-[1.75rem] font-bold mb-5">{{ name }}</h2>
    <ul class="space-y-6">
      <li v-for="list of lists" :key="list" class="flex itemsc-center gap-x-3 leading-[1.2]">
        <IconDot />
        {{ list }}
      </li>
    </ul>
  </div>
</template>
