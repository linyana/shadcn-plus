import 'shadcn-plus/style.css';
import './App.css';
import {
  Accordion,
} from 'shadcn-plus';

const App = () => {
  return (
    <div className='center'>
      <Accordion
        style={{width: '300px'}}
        type="single"
        items={[
        {
          trigger: "Is it accessible?",
          content: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
          trigger: "Is it accessible?",
          content: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
          trigger: "Is it accessible?",
          content: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
      ]} />
    </div>
  );
};

export default App;
