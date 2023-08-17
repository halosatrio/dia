import { createBrowserRouter } from 'react-router-dom';
import HomeView from '@/views/HomeView';
import DetailHabitView from '@/views/DetailHabitView';
import AboutView from '@/views/AboutView';
import SettingView from '@/views/SettingView';
import AddEditView from '@/views/AddEditView';
import SortItemView from '@/views/SortItemView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/detail/:id',
    element: <DetailHabitView />,
  },
  {
    path: '/edit/:id',
    element: <AddEditView />,
  },
  {
    path: '/setting',
    element: <SettingView />,
  },
  {
    path: '/setting/sort',
    element: <SortItemView />,
  },
  {
    path: '/about',
    element: <AboutView />,
  },
]);

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
