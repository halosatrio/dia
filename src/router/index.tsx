import { createBrowserRouter } from 'react-router-dom';
import HomeView from '@/views/HomeView';
import DetailHabitView from '@/views/DetailHabitView';
import AboutView from '@/views/AboutView';
import SettingView from '@/views/SettingView';
import EditHabitView from '@/views/EditHabitView';
import SortItemView from '@/views/SortItemView';
import AddHabitView from '@/views/AddHabitView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/add',
    element: <AddHabitView />,
  },
  {
    path: '/detail/:id',
    element: <DetailHabitView />,
  },
  {
    path: '/edit/:id',
    element: <EditHabitView />,
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
