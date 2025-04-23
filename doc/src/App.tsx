import 'shadcn-plus/style.css';
import './App.css';
import {
  Button,
  Card,
  HoverCard,
} from 'shadcn-plus';

const App = () => {
  return (
    <div>
      <HoverCard trigger={<><Button>Button</Button></>}>
        <Card style={{
          marginTop: 12,
        }}>
          <p className="text-sm">
            The React Framework - created and maintained by @vercel.
          </p>
        </Card>
      </HoverCard>
    </div>
  );
};

export default App;
