import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import { publicRouter } from './routes/publicRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={publicRouter}></RouterProvider>
  </StrictMode>
);
