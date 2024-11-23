<script setup>
import Header from '@/components/Header.vue';
import Self from '@/components/Self.vue';
import About from '@/components/About.vue';
import Last from '@/components/Last.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <main class="">
    <section>
      <Header />
    </section>
    <main class="max-w-6xl mx-auto">
      <Self />
      <About />
      <Last />
      <Footer />
    </main>
  </main>
</template>
