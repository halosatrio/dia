import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/components/MainScreen.vue';
import AddEditScreen from '@/components/AddEditScreen.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainScreen,
    },
    {
      path: '/edit',
      name: 'edit',
      component: AddEditScreen,
    },
  ],
});

export default router;
