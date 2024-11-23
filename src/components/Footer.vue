<script setup>
import Mail from './icons/Mail.vue';
import GitHub from './icons/GitHub.vue';
import Twitter from './icons/Twitter.vue';
import LinkedIn from './icons/LinkedIn.vue';
</script>

<template>
  <div class="w-full h-10">
    <div class="w-full h-[1px]"></div>
    <div
      class="w-full h-5/6 flex justify-center items-center gap-4 text-gray-600 font-poppins font-semibold"
    >
      <p>
        &copy; {{ new Date().getFullYear() }}<span class="font-edu"><i> Papi Romeo</i></span
        >.
      </p>
    </div>
  </div>
</template>
