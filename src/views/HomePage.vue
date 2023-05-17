<script setup>
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconFlagIndonesia from '@/components/icons/IconFlagIndonesia.vue'
</script>

<template>
  <main class="relative main-container grid grid-cols-1 lg:grid-cols-2 py-20">
    <img class="absolute top-auto lg:top-0 bottom-0 lg:bottom-auto -left-32" src="/images/bg-home-1.svg" alt="bg home 1" />
    <img class="absolute -top-3 lg:-top-[4.6rem] right-3 lg:-right-12" src="/images/bg-home-2.png" alt="bg home 2" />
    <div class="relative z-10 order-2 lg:order-1 mt-8 lg:mt-0">
      <div class="text-3xl lg:text-4xl mb-7">
        <div class="font-light mb-2 lg:mb-4">Hi, nama saya</div>
        <h1 class="font-bold">Dedik Sugiharto!</h1>
      </div>
      <p class="opacity-60 text-base lg:text-lg font-light w-full lg:w-[80%] mt-3 tracking-wide">
        Saya seorang software-engineer, pembaca buku, warga NU, dan juga murid (online) Pak
        Fahruddin Faiz.
      </p>
      <RouterLink to="/overview" class="group/goto hover:opacity-90 mt-8 mb-14 flex items-center gap-x-4 w-max font-semibold transition">
        Go To Overview
        <div class="group-hover/goto:translate-x-1 transition">
          <IconArrowRight />
        </div>
      </RouterLink>
      <div class="flex items-start gap-x-8">
        <div>
          <div class="text-xs lg:text-sm font-extralight opacity-60 mb-1">PROJECTS</div>
          <h2 class="text-xl lg:text-2xl font-semibold">12</h2>
        </div>
        <div>
          <div class="text-xs lg:text-sm font-extralight opacity-60 mb-1">EXPERIENCE</div>
          <h2 class="text-xl lg:text-2xl font-semibold">8 yrs</h2>
        </div>
        <div>
          <div class="text-xs lg:text-sm font-extralight opacity-60 mb-1">NATIONALITY</div>
          <h2 class="flex items-center gap-x-3 text-xl lg:text-2xl font-semibold">
            IDN <IconFlagIndonesia />
          </h2>
        </div>
      </div>
    </div>
    <div class="relative z-10 flex justify-center order-1 lg:order-2">
      <img class="w-full" src="/images/home.png" alt="home">
    </div>
  </main>
</template>
