import { Button, Flex, Input } from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';

const App = () => {
  return (
    <>
      <div className="center">
        <div
          style={{
            width: '200px',
          }}
        >
          <Flex gap="16px">
            <Input />
            <Button>Submit</Button>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default App;
