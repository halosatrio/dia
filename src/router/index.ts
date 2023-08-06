import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/components/MainScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainScreen,
    },
  ],
});

export default router;
