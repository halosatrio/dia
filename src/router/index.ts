import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/components/MainScreen.vue';
import AddEditScreen from '@/components/AddEditScreen.vue';
import DetailHabit from '@/components/DetailHabit.vue';
import SortItem from '@/components/SortItem.vue';

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
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailHabit,
    },
    {
      path: '/settings/sort',
      name: 'sort',
      component: SortItem,
    },
  ],
});

export default router;
