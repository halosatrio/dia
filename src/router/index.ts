import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '@/components/MainScreen.vue';
import AddEditScreen from '@/components/AddEditScreen.vue';
import DetailHabit from '@/components/DetailHabit.vue';
import SortItemScreen from '@/components/SortItemScreen.vue';
import SettingScreen from '@/components/SettingScreen.vue';
import AboutScreen from '@/components/AboutScreen.vue';

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
      path: '/setting',
      name: 'setting',
      component: SettingScreen,
    },
    {
      path: '/setting/sort',
      name: 'sort',
      component: SortItemScreen,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutScreen,
    },
  ],
});

export default router;
