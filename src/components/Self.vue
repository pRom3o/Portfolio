<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Asterics from './icons/Asterics.vue';
</script>

<template>
  <section
    class="max-w-6xl mx-4 min-h-56 md:mx-auto flex gap-4 justify-between py-3 font-sans text-custom-ash-2"
  >
    <div class="hidden md:flex md:w-1/3 rounded-xl bg-opacity-75 bg-gray-100 p-2 shawow">
      <div class="w-full bg-slate-100 bg-opacity-75 rounded-lg"></div>
    </div>
    <div class="w-full md:w-2/3 rounded-xl flex flex-col justify-between">
      <div class="flex md:justify-between md:mx-auto items-center rounded p-3 my-2">
        <Asterics />
        <h1 class="font-normal md:text-4xl text-2xl mx-3">SELF-SUMMARY</h1>
        <Asterics />
      </div>
      <div class="px-6 py-4 text-left bg-opacity-75 bg-slate-100 h-full rounded-xl shadow">
        <h2 class="text-3xl font-semibold md:py-3 italic">About me</h2>
        <p class="font-medium">
          Hi there, welocome to my Portfolio. <br />My name is Romeo, i'm a frontend web developer
          creating interactive, user-friendly websites and applications. With an intermediate
          experience in modern technologies like
          <span class="text-orange-400 font-medium italic">HTML</span>,
          <span class="text-sky-500 font-medium italic">Tailwind CSS</span>,
          <span class="text-yellow-500 font-medium italic">JavaScript</span>, and frameworks like
          <span class="font-medium italic text-green-700">Vue.js</span>, I make designs that are
          both functional and visually appealing. Aside from turning ideas into responsive user
          interfaces, i enjoy gaming, reading or watching animes during my free time. Got an idea
          you want to bring to life?, contact me through any of my socials below
        </p>
      </div>
    </div>
  </section>
</template>
