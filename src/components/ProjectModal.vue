<script setup>
import { ref } from 'vue';
// const isOpen = ref(false);

const expanded = ref(false);
const toggle = () => {
  expanded.value = !expanded.value;
};
import Enter from './icons/Enter.vue';

const projects = ref([
  { name: 'PressMart', link: 'https://www.pressmart.com' },
  { name: 'ToDo App', link: 'https://www.mytodoapp.com' },
]);
</script>

<template>
  <main class="flex justify-center items-center p-2">
    <!-- <button @click="isOpen = true" class="rounded-lg bg-gray-200 md:p-2 px-6 py-1">Projects</button> -->

    <button @click="toggle" class="rounded-lg md:p-2 px-6 py-3">
      <Enter />
    </button>

    <Teleport to="body">
      <div
        class="expand overflow-hidden z-10"
        :class="
          expanded
            ? 'h-full w-full md:w-1/3 fixed md:absolute md:top-[1%] md:left-[35%] top-0 left-0 bg-white rounded-xl p-6 '
            : 'w-0 h-0 fixed md:absolute md:top-[1%] md:left-[35%] top-0 left-0'
        "
      >
        <button @click="toggle" class="rounded-full bg-gray-200 p-4 mb-3 hover:bg-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div class="flex flex-col gap-4 justify-between items-center md:py-10 md:px-5">
          <div
            v-for="(item, index) in projects"
            :key="index"
            class="w-full rounded-md h-40 border border-black p-4"
          >
            <a :href="item.link" target="_blank">{{ item.name }}</a>
            <h1 class="text-center text-7xl font-bold">PROJECT</h1>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
.expand {
  transition: all 0.8s ease-in-out;
}
</style>
