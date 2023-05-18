<script setup>
import { projects } from '@/data/projects'
import SectionTitle from '../components/SectionTitle.vue'
import IconDot from '../components/icons/IconDot.vue'
import { ref, computed } from 'vue'
import CardNormal from '../components/CardNormal.vue'

const selectedCategory = ref('Semua Kategori')

const selectedProject = ref(null)

const projectList = computed(() =>
  projects.lists.filter((project) => {
    if (selectedCategory.value == 'Semua Kategori') {
      return project
    }
    return project.category == selectedCategory.value
  })
)

const openPopupProject = (project) => {
  selectedProject.value = project
  console.log(selectedProject.value)
}
const closePopupProject = (el) => {
  if (el.target === el.currentTarget) {
    selectedProject.value = null
  }
}
</script>

<template>
  <main class="relative main-container grid grid-cols-1 lg:grid-cols-12 items-start pt-8 pb-28">
    <div class="col-span-5">
      <SectionTitle name="Projects" />
      <p class="opacity-60 text-base lg:text-lg font-light w-full lg:w-[80%] mt-14">
        {{ projects.description }}
      </p>
      <ul class="space-y-7 text-sm lg:text-base mt-12">
        <li
          v-for="(category, i) of projects.categories"
          @click="selectedCategory = category"
          :key="i"
          class="flex itemsc-center gap-x-3 w-max leading-[1.2] cursor-pointer"
          :class="selectedCategory == category ? 'opacity-100' : 'opacity-60'"
        >
          <IconDot />
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 md:mt-0">
      <CardNormal
        v-for="(project, i) of projectList"
        :key="i"
        :title="project.name"
        :sub-title="project.category"
        :image="project.image"
        subTitleUppercase
        @imageClick="() => openPopupProject(project)"
        class="bg-white/5 p-5 pb-7"
      />
    </div>

    <!-- popup -->
    <div
      v-if="selectedProject"
      @click="closePopupProject"
      class="bg-black/60 backdrop-blur fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="p-5 pb-7 rounded-lg text-center main-container w-full">
        <CardNormal
          :title="selectedProject.name"
          :sub-title="selectedProject.category"
          :image="selectedProject.image"
          subTitleUppercase
        />
      </div>
    </div>
  </main>
</template>
