import { useSidebarStore } from '@/lib/sidebar'
import { Sidebar } from 'lucide-react'
import React from 'react'

const SidebarCollapseBtn = () => {
    const { toggleSidebar } = useSidebarStore()
  return (
    <div className='flex items-center justify-center w-10  aspect-square bg-secondary shadow-sm absolute top-0 left-0 rounded-lg border border-border'>
        <button onClick={()=>toggleSidebar()} className='flex cursor-pointer items-center h-full w-full justify-center'>
            <Sidebar className='size-4'/>
        </button>
    </div>
  )
}

export default  SidebarCollapseBtn 

