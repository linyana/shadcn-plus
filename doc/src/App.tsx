import {
  Button,
  Flex,
  Input,
  Sheet,
} from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';

const App = () => {
  return (
    <div className="center">
      <Sheet
        title="Edit"
        description="Edit your name and email"
        contentProps={{
          style: {
            padding: '20px 0',
          }
        }}
        content={(
          <Flex flexDirection='column' gap="16px">
            <Input label='Name' />
            <Input label='Email' />
            <Flex justifyContent='flex-end'>
              <Button>Save</Button>
            </Flex>
          </Flex>
        )}
      >
        <Button>Edit</Button>
      </Sheet>
    </div>
  );
};

export default App;
