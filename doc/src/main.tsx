import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'shadcn-plus/style.css';
import 'shadcn-plus/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/shadcn-plus">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
