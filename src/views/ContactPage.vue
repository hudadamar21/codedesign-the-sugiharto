<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { contact } from '../data/contact'
</script>

<template>
  <main class="relative main-container grid grid-cols-1 lg:grid-cols-2 items-start pt-8 pb-44">
    <div>
      <SectionTitle name="Contact" />
      <p class="opacity-60 text-base lg:text-lg font-light w-full lg:w-[80%] mt-14">
        {{ contact.description }}
      </p>
      <div class="space-y-6 mt-10">
        <template v-for="(list, i) of contact.list" :key="i">
          <div class="flex items-center gap-6">
            <div class="w-[70px] aspect-square rounded bg-white/5 flex items-center justify-center">
              <img :src="list.icon" :alt="list.name" />
            </div>
            <div>
              <div>{{ list.name }}</div>
              <h2>{{ list.body }}</h2>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="relative z-10 flex justify-center mt-12 lg:mt-0 mb-16 lg:mb-0">
      <div class="relative pt-12">
        <div class="p-6 rounded-lg bg-white/5 w-[260px] leading-relaxed border border-white/10">
          “{{ contact.quote }}”
        </div>
        <div class="absolute top-full right-5 lg:-right-16 mt-7">
          <div
            class="aspect-square w-[110px] rounded-full bg-white/5 flex items-center justify-center"
          >
            <div
              class="aspect-square w-[84px] rounded-full bg-white/5 flex items-center justify-center"
            >
              <img
                src="/images/photo-circle.png"
                class="aspect-square w-[60px] rounded-full"
                alt="photo"
              />
            </div>
          </div>
        </div>
      </div>

      <img class="absolute -top-20 left-0" src="/images/grid.svg" alt="grid" />
    </div>
  </main>
</template>
