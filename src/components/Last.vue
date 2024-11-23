<script setup>
import Twitter from './icons/Twitter.vue';
import Instagram from './icons/Instagram.vue';
import Enter from './icons/Enter.vue';
import ProjectModal from './ProjectModal.vue';
import { ref } from 'vue';
const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <section class="min-h-32 max-w-6xl md:mx-0 mx-4">
    <div class="flex flex-wrap md:flex-nowrap gap-4 mt-2 relative">
      <div
        class="flex flex-col p-3 bg-slate-100 bg-opacity-75 gap-3 font-sans md:mb-4 shadow rounded-xl w-44 order-1 md:order-none"
      >
        <div class="px-6 flex justify-between gap-4 items-center bg-slate-50 py-2 rounded-xl">
          <p class="rounded-full p-2 bg-gray-300 text-white bg-opacity-75"><Instagram /></p>
          <p class="rounded-full p-2 bg-gray-300 text-white bg-opacity-75"><Twitter /></p>
        </div>
        <div class="flex justify-between items-center gap-4">
          <div class="flex flex-col">
            <p class="text-xs">STAY WITH ME</p>
            <p class="font-medium text-xl">Profiles</p>
          </div>
          <p class="cursor-pointer mt-4"><Enter /></p>
        </div>
      </div>
      <div
        class="w-full bg-slate-100 rounded-xl mb-4 px-6 shadow bg-opacity-75 flex flex-col order-3 md:order-none"
      >
        <div class="w-full p-4"></div>
        <div class="flex items-end justify-between w-full py-2">
          <p class="text-4xl text-gray-700 font-semibold">
            Lets <br />work
            <span class="text-blue-900">together.</span>
          </p>
          <button><Enter /></button>
        </div>
      </div>
      <div
        class="flex flex-col bg-slate-50 bg-opacity-75 font-sans md:mb-4 shadow rounded-xl md:order-none order-2 min-w-44 p-2"
      >
        <div class="px-4 py-8 w-full bg-gray-100">
          <!-- <h1 class=""></h1> -->
          <!-- <p>feel free to check them out</p> -->
        </div>
        <div class="flex mx-2 justify-between items-center h-full w-full">
          <h1 class="text-lg font-medium">My Projects</h1>
          <ProjectModal class="mr-2" />
        </div>
      </div>
    </div>
  </section>
</template>
