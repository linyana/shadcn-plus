import 'shadcn-plus/style.css';
import './App.css';
import {
  Flex,
  SidebarProvider,
} from 'shadcn-plus';
import { Dashboard } from './pages';

const App = () => {
  return (
    <div>
      <Flex>
        <SidebarProvider>
          <Dashboard />
        </SidebarProvider>
      </Flex>
    </div>
  );
};

export default App;
