import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Signin from '../pages/Signin';

let publicRouter = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: '/signin',
        Component: Signin,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);

export { publicRouter };
