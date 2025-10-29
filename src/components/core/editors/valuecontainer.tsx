import { Switch } from '@/components/ui/switch'
import React from 'react'

const VContainer = ( { heading , children} : {
    heading? : string,
    children : React.ReactNode
}) => {
  return (
    <div className='flex gap-2 flex-col w-full'>
                    {heading && <h4 className='text-muted-foreground text-xs'>{heading}</h4>}
                   {children}
                   
    </div>
  )
}


const VHeading = ({children} : { children : React.ReactNode}) => {
    return (
        <h4 className='text-muted-foreground text-xs'>{children}</h4>
    )
}
const SwitchHeading = ( {heading, checked  , setChecked } : { heading :string , checked : boolean , setChecked : ()=>void; } ) => {
    return (
        <div className='flex w-full items-center justify-between pb-1'>
            <h4 className='text-muted-foreground text-xs'>{heading}</h4>
          <Switch 
            id="secondary"
           checked={checked}
           onCheckedChange={setChecked}
          />
          </div>
    )
}


const VDivider = () => {
    return (
        <span className='w-full h-0.5 bg-primary/20 opacity-50 my-2 '/>
    )
}

export { VContainer , VHeading , SwitchHeading , VDivider}

