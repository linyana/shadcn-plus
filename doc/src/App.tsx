import { Button, Flex, Input, Collapsible, Popover } from 'shadcn-plus';
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
          <Popover content={(
            <Input
            label="User Name"
            />
          )}>
            <Button>Click me</Button>
          </Popover>
        </div>
        <Popover content={(
            <Input
            label="User Name"
            />
          )}>
            <Button>Click me</Button>
          </Popover>
      </div>
    </>
  );
};

export default App;
