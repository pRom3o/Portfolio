import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  //   { path: '/About', name: 'About', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
