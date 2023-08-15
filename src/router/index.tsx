import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../views/HomeView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
]);

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
