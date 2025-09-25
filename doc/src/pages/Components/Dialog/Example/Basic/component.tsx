import { Button, Dialog, Flex } from 'shadcn-plus';
import { useState } from 'react';

export const BasicDialogComponent = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open the modal</Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        header="Title"
        description="Description"
        footer={
          <Flex justifyContent='flex-end' gap="8px">
            <Button onClick={() => setOpen(false)} variant="outline">Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Flex>
        }
      >
        Content
      </Dialog> 
    </>
  );
};
