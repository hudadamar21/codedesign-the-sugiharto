<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import AppInfo from "./components/AppInfo.vue";
</script>

<template>
  <MainHeader />

  <RouterView />

  <AppInfo />
</template>
