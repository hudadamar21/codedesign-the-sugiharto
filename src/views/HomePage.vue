<script setup>
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconFlagIndonesia from '@/components/icons/IconFlagIndonesia.vue'
</script>

<template>
  <main class="relative main-container grid grid-cols-2 pt-20">
    <img class="absolute top-0 -left-32" src="/images/bg-home-1.svg" alt="bg home 1" />
    <img class="absolute -top-20 -right-12" src="/images/bg-home-2.png" alt="bg home 2" />
    <div class="relative z-10">
      <div class="text-4xl mb-7">
        <div class="font-light mb-4">Hi, nama saya</div>
        <h1 class="font-bold">Dedik Sugiharto!</h1>
      </div>
      <p class="opacity-60 text-lg font-light w-[80%] mt-3 tracking-wide">
        Saya seorang software-engineer, pembaca buku, warga NU, dan juga murid (online) Pak
        Fahruddin Faiz.
      </p>
      <RouterLink to="/overview" class="group/goto hover:opacity-90 mt-8 mb-14 flex items-center gap-x-4 font-semibold transition">
        Go To Overview
        <div class="group-hover/goto:translate-x-1 transition">
          <IconArrowRight />
        </div>
      </RouterLink>
      <div class="flex items-start gap-x-8">
        <div>
          <div class="text-sm font-extralight opacity-60 mb-1">PROJECTS</div>
          <h2 class="text-2xl font-semibold">12</h2>
        </div>
        <div>
          <div class="text-sm font-extralight opacity-60 mb-1">EXPERIENCE</div>
          <h2 class="text-2xl font-semibold">8 yrs</h2>
        </div>
        <div>
          <div class="text-sm font-extralight opacity-60 mb-1">NATIONALITY</div>
          <h2 class="flex items-center gap-x-3 text-2xl font-semibold">
            IDN <IconFlagIndonesia />
          </h2>
        </div>
      </div>
    </div>
    <div class="relative z-10 flex justify-center">
      <img class="w-full" src="/images/home.png" alt="home">
    </div>
  </main>
</template>
