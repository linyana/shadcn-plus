import { Button, Flex, Input } from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';

const App = () => {
  return (
    <>
      <div className="center">
        <div
          style={{
            width: '400px',
          }}
        >
          <Flex gap="16px" flexDirection="column">
            <Input
              label="User Name"
            />
            <Button>Submit</Button>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default App;
