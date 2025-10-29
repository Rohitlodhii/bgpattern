"use client"

import { FullBackgrounds } from "@/patterns/fullbackground"
import LeftSidebar from "./components/LeftSidebar"
import SVGPreview from "./components/Preview"
import FullSVGPreview from "./components/previewers/SvgPreviewerV2"
import RightSidebar from "./components/RightSidebar"
import SidebarCollapseBtn from "./components/ui/Sidebarcollapsebtn"
import ToolbarGroup from "./components/ui/toolbar"
import Editor from "./components/patternEditors/editor"
import Screensize from "./components/ui/Screensize"
import ComponentPreviewer from "./components/Preview"


const page = () => {
    

  return (
    <div className="relative h-full w-full flex gap-2 ">
        <LeftSidebar/>
        <div className="h-full bg-dots border border-border  flex-1 rounded-xl flex flex-col md:flex-row lg:flex-row p-2 ">
            <div className="relative flex-1 flex items-center justify-center h-full ">
              <SidebarCollapseBtn/>
              <ToolbarGroup/>
              <Screensize/>
              
              <ComponentPreviewer />
              
            </div>
           <Editor/>
            
        
         </div>
        
    </div>
  )
}

export default page


