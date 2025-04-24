import 'shadcn-plus/style.css';
import './App.css';
import {
  Card,
} from 'shadcn-plus';

const App = () => {
  return (
    <div>
      <Card
        footer="1"
        style={{
          marginTop: 12,
        }}
      >
        <p className="text-sm">
          The React Framework - created and maintained by @vercel.
        </p>
      </Card>
    </div>
  );
};

export default App;
