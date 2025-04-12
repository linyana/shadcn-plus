import { Button, Collapsible } from 'shadcn-plus';
import 'shadcn-plus/style.css';
import './App.css';
import { ChevronsUpDown } from 'shadcn-plus/icons';

const App = () => {
  return (
    <>
      <div
        style={{
          width: '400px',
          marginLeft: '400px',
          marginTop: '200px',
        }}
      >
        <Collapsible
          content={
            <>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @stitches/react
              </div>
            </>
          }
        >
          <Button variant="ghost">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </Collapsible>
      </div>
    </>
  );
};

export default App;
