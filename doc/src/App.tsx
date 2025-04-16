import 'shadcn-plus/style.css';
import './App.css';
import { Flex, Sidebar } from 'shadcn-plus';

const App = () => {
  return (
    <div>
      <Flex>
        <div
          style={{
            paddingLeft: 200,
          }}
        ></div>
        <Sidebar />
      </Flex>
    </div>
  );
};

export default App;
