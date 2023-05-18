<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import CardNormal from '../components/CardNormal.vue'
import { skills } from '../data/skills'
</script>

<template>
  <main class="relative main-container pt-8 pb-28">
    <div class="order-2 lg:order-1">
      <SectionTitle name="Skills" />
      <p class="opacity-60 text-base lg:text-lg font-light w-full lg:w-[40%] mt-14">
        {{ skills.description }}
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-8">
      <template v-for="(skill, i) of skills.lists" :key="i">
        <CardNormal :title="skill.name" :image="skill.image" :sub-title="skill.description" />
      </template>
    </div>
  </main>
</template>
