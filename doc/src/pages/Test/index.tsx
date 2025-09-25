import { Button, Dialog, Flex } from 'shadcn-plus';
import { TestProvider } from './provider';
import { useState } from 'react';

export const Test = () => {
  const [open, setOpen] = useState(false)

  return (
    <TestProvider>
      <Button onClick={() => setOpen(true)}>Open the modal</Button>
        <Dialog
          open={open}
          onOpenChange={setOpen}
          header="Title"
          description="Description"
          footer={
            <Flex justifyContent='flex-end'>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </Flex>
          }
        >
          Content
        </Dialog>
    </TestProvider>
  );
};
