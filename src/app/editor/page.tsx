"use client"

import LeftSidebar from "./components/LeftSidebar"
import SVGPreview from "./components/Preview"
import RightSidebar from "./components/RightSidebar"
import SidebarCollapseBtn from "./components/ui/Sidebarcollapsebtn"
import ToolbarGroup from "./components/ui/toolbar"


const page = () => {
    

  return (
    <div className="h-full w-full flex gap-2">
        <LeftSidebar/>
        <div className="h-full bg-neutral-200  flex-1 rounded-xl flex flex-col md:flex-row lg:flex-row p-2 ">
            <div className="relative flex-1 flex items-center justify-center h-full ">
              <SidebarCollapseBtn/>
              <ToolbarGroup/>
              
                <SVGPreview/>
            </div>
           <RightSidebar/>
            
        
         </div>
        
    </div>
  )
}

export default page


