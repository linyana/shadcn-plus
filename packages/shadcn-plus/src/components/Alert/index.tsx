import { Terminal } from "lucide-react"
import { Alert as ShadcnAlert, AlertDescription, AlertTitle } from "../ui/alert"
import { Show } from "../Show"
import { IAlertType } from "./types"

export const Alert = ({ 
  title,
  description,
  icon: Icon,
}: IAlertType) => { 
  return (
    <ShadcnAlert>
      {
        Icon ? <Icon className="mr-2 h-4 w-4" /> :
        <Terminal className="h-4 w-4" />
      } 
      <AlertTitle>{title}</AlertTitle>
      <Show rule={description}>
        <AlertDescription>
          {description}
        </AlertDescription>
      </Show>
    </ShadcnAlert>
  )
}