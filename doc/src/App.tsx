import 'shadcn-plus/style.css';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes';
import { LayoutProvider } from './provider';
import { useEffect } from 'react';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <LayoutProvider>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </LayoutProvider>
  );
};

export default App;
