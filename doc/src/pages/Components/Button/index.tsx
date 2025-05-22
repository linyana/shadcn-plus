import { Component, Page } from "@/components"
import { Button, Heading } from "shadcn-plus"

export const ButtonPage = () => { 
  return (
    <Page
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      <Heading>Examples</Heading>
      <Component
        previewContent={(
          <Button>Button</Button>
        )}
        codeContent={
`import { Button } from "shadcn-plus";

<Button>Button</Button>`
        }
      />
      <Heading style={{
        marginTop: 32,
      }}>Props</Heading>
    </Page>
  )
}