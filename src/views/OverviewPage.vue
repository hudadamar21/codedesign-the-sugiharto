<script setup>
import BioList from '../components/BioList.vue'
import { overview } from '@/data/overview'
</script>

<template>
  <main class="relative main-container grid grid-cols-1 lg:grid-cols-2 items-start pt-8 pb-28 lg:pb-0">
    <div class="order-2 lg:order-1">
      <div class="relative mb-7">
        <h1 class="realtive z-10 text-4xl font-bold">Overview</h1>
        <div class="absolute -top-9 -left-16 text-[100px] font-bold opacity-[3%] leading-none">
          Overview
        </div>
      </div>
      <p class="opacity-60 text-base lg:text-lg font-light w-full lg:w-[80%] mt-14">
        {{ overview.description }}
      </p>
      <template v-for="bio of overview.bio" :key="bio.name">
        <BioList :name="bio.name" :lists="bio.list" />
      </template>
    </div>
    <div class="relative z-10 flex justify-center order-1 lg:order-2 mb-16 lg:mb-0">
      <figure>
        <img class="w-56 lg:w-auto" :src="overview.photo.url" alt="photo" />
        <figcaption class="text-center opacity-60 mt-1 text-sm lg:text-base">{{ overview.photo.caption }}</figcaption>
      </figure>

      <img class="absolute -top-20 left-0" src="/images/grid.svg" alt="grid" />
    </div>
  </main>
</template>
