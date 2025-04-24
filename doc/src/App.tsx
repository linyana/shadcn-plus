import 'shadcn-plus/style.css';
import './App.css';
import {
  Accordion,
  Alert,
} from 'shadcn-plus';

const App = () => {
  return (
    <div className='center'>
      <div style={{
        width: '600px'
      }}>
        <Alert title="Heads up!" description="You can add components to your app using the cli." />
      </div>
    </div>
  );
};

export default App;
