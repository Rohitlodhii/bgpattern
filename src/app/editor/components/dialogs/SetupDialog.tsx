import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/CustomDialog'



interface SetupDialogProps {
    Trigger: React.ComponentType<any>, // Accepts any component
    Content: React.ComponentType<any>  // Accepts any component
}

const SetupDialog = ({Trigger , Content} : SetupDialogProps) => {
  return (
    <Dialog>
  <DialogTrigger>
    <Trigger/>
  </DialogTrigger>

  <DialogContent>
    <DialogTitle/>
    <Content/>
  </DialogContent>
</Dialog>
  )
}

export default SetupDialog
