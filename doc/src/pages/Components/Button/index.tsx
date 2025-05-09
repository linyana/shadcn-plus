import { Component, Page } from "@/components"
import { Button } from "shadcn-plus"

export const ButtonPage = () => { 
  return (
    <Page
      title="Button"
      description="Displays a button or a component that looks like a button."
    >
      <Component
        previewContent={(
          <Button>Button</Button>
        )}
        codeContent={"Code Content"}
      />

    </Page>
  )
}