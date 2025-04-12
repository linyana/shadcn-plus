import {
  Button,
  Flex,
  Input,
  Collapsible,
  Popover,
} from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';

const App = () => {
  return (
    <>
      <div
        style={{
          width: '400px',
          marginLeft: '200px',
          marginTop: '200px',
        }}
      >
        <Popover
          content={<Input label="User Name" />}
        >
          <Button>Click me</Button>
        </Popover>
      </div>
      <Popover
        content={<Input label="User Name" />}
      >
        <Button>Click me</Button>
      </Popover>
    </>
  );
};

export default App;
