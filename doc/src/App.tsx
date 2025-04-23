import 'shadcn-plus/style.css';
import './App.css';
import {
  Button,
  Card,
} from 'shadcn-plus';
import { Check } from 'shadcn-plus/icons';

const App = () => {
  return (
    <div>
      <Card
        style={{
          width: '300px'
        }}
        title="Notifications"
        description="You have 3 unread messages."
        footer={(
         <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      )}>
        Content
      </Card>
    </div>
  );
};

export default App;
