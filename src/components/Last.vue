<script setup>
import IconTailwind from './icons/IconTailwind.vue';
import IconJavascript from './icons/IconJavascript.vue';
import IconVue from './icons/IconVue.vue';

import Enter from './icons/Enter.vue';
import ProjectModal from './ProjectModal.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import Footer from './Footer.vue';
import { svgs } from './svgs.vue';
import gsap from 'gsap';
const isExpanded = ref(false);
const show = ref(false);
const toggleShow = () => {
  show.value = !show.value;
};

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const beforeEnter = (el) => {
  // console.log('set initial state');
  el.style.transform = 'translateY(-100px)';
  el.style.opacity = 0;
};
const enter = (el, done) => {
  // console.log('make transition');
  gsap.to(el, {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'back.inOut',
    delay: el.dataset.index * 0.2,
    onComplete: done,
  });
};

const svgss = [IconTailwind, IconVue, IconJavascript];

const currentIndex = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % svgss.length; // Loop back to the first slide
  }, 3000); // Change slides every 3 seconds

  // Clean up when the component is unmounted
  onUnmounted(() => clearInterval(interval));
});
</script>

<template>
  <section class="min-h-32 max-w-6xl md:mx-0 mx-4">
    <div class="flex flex-wrap md:flex-nowrap gap-4 mt-2 relative">
      <div
        class="flex flex-col p-2 bg-slate-100 bg-opacity-75 gap-3 font-sans md:mb-4 shadow rounded-xl w-44 md:min-w-56 order-1 md:order-none"
      >
        <div class="slideshow md:h-36 h-36 aspect-auto">
          <Transition name="fade" class="relative w-full overflow-hidden rounded-xl">
            <component :is="svgss[currentIndex]" :key="currentIndex" class="svg-slide"></component>
          </Transition>
        </div>
      </div>
      <div
        class="w-full bg-slate-100 rounded-xl mb-4 px-6 shadow bg-opacity-75 flex flex-col order-3 md:order-none"
      >
        <div class="w-full p-8">
          <!-- <p>Get in touch with me</p> -->
        </div>
        <div class="flex items-end justify-between w-full py-2">
          <p class="text-4xl text-gray-700 font-semibold">
            Lets <br />work
            <span class="text-blue-900">together.</span>
          </p>
          <button class="cursor-pointer mt-4" @click="toggleShow"><Enter /></button>
        </div>
      </div>
      <div
        class="flex flex-col bg-slate-50 bg-opacity-75 font-sans md:mb-4 shadow rounded-xl md:order-none order-2 md:min-w-56 w-44 p-2"
      >
        <div class="px-4 py-12 w-full bg-gray-100">
          <!-- <h1 class=""></h1> -->
          <!-- <p>feel free to check them out</p> -->
        </div>
        <div class="flex mx-2 justify-between items-center h-full w-full">
          <h1 class="text-lg font-medium">My Projects</h1>
          <ProjectModal class="mr-2" />
        </div>
      </div>
    </div>
    <Transition name="switch" mode="out-in">
      <div class="w-full h-16 absolute md:fixed bottom-0 left-0 backdrop-blur-sm z-30" v-if="show">
        <div class="w-96 h-full flex items-center justify-center mx-auto">
          <transition-group
            class="flex gap-5"
            tag="ul"
            appear
            @before-enter="beforeEnter"
            @enter="enter"
          >
            <li
              class="p-2 bg-gray-400 rounded-full text-white"
              v-for="(item, index) in svgs"
              :key="index"
              :data-index="index"
            >
              <a :href="item.link" target="_blank" v-html="item.svg"></a>
            </li>
          </transition-group>
        </div>
      </div>
    </Transition>
    <div>
      <Footer />
    </div>
  </section>
</template>

<style scoped>
/* switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.4s ease;
}
/* Slideshow container */
.slideshow {
  position: relative;
  /* Adjust size as needed */
  /* Adjust height to your preferred size */
  overflow: hidden; /* Prevent content overflow */
  border-radius: 1rem; /* Optional: for rounded corners */
}

/* Slide styling */
.svg-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%); /* Slide out or in horizontally */
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0); /* Slide in */
}
</style>
