import 'shadcn-plus/style.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { LayoutProvider } from './provider';


const App = () => {
  return (
    <LayoutProvider>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </LayoutProvider>
  );
};

export default App;
