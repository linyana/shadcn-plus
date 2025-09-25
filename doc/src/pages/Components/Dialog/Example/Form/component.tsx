import { Button, Dialog, Flex, Input } from 'shadcn-plus';
import { useState } from 'react';

export const FormDialogComponent = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert('Submitted: ' + name);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Form Dialog</Button>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        header="Create User"
        description="Fill in the details to create a new user."
        footer={
          <Flex justifyContent="flex-end" gap="8px">
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </Flex>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Input
            id="username"
            placeholder="Enter a username"
            label="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Dialog>
    </>
  );
};
