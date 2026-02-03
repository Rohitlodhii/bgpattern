import { useSidebarStore } from "@/lib/sidebar";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ThumbnailPreviewerCard from "./ui/ThumbnailPreviewerCard";
import { LinearPatterns } from "@/patterns/linear";
import { useColorStore } from "@/lib/zustandState";
import { useRecentKeysStore, selectSortedKeys } from "@/lib/recentKeysStore";
import { Search, Settings, Sidebar } from "lucide-react";
import SetupDialog from "./dialogs/SetupDialog";
import SettingsDialogContent from "./dialogs/settingsDialog";
import SidebarCollapseBtn from "./ui/Sidebarcollapsebtn";

const LeftSidebar = () => {
  const { isOpen ,toggleSidebar } = useSidebarStore();
  const { fill, fillOpacity, background } = useColorStore();
  const keyToTimestamp = useRecentKeysStore((s) => s.keyToTimestamp);
  const recentKeys = useMemo(() => selectSortedKeys({ keyToTimestamp, upsertKey: () => {}, removeKey: () => {}, clearAll: () => {} } as any), [keyToTimestamp]);
  const recentKeySet = useMemo(() => new Set(recentKeys), [recentKeys]);
  const recentLinearPatterns = useMemo(
    () => LinearPatterns.filter((pattern) => recentKeySet.has(String(pattern.key))),
    [recentKeySet]
  );
  

  return (
    <motion.div
      className={`h-full bg-sidebar ${isOpen ? "border z-10" : "border-none z-0"}  lg:max-w-sm  border-border absolute  lg:top-0 lg:left-0 lg:relative lg:flex rounded-xl`}
      animate={{
        width: isOpen ? "100%" : "0%",
        
        
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    
      
    >
      <motion.div
        className="flex flex-col p-1 gap-1 w-full h-full"
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="h-12 w-full rounded-xl border border-border bg-sidebar flex justify-between p-1 ">
          <div className="flex gap-2 items-center  ">
            <div className="h-full aspect-square bg-orange-400 rounded-lg "></div>
            <div className="text-lg font-black">.bg-pattern</div>
          </div>
          <div className="flex lg:hidden pr-3 ">
          <button onClick={()=>toggleSidebar()} className='flex cursor-pointer items-center h-full w-full justify-center'>
            <Sidebar className='size-4'/>
        </button>
          </div>
        </div>
        <div className="  flex  flex-col gap-2 py-1 rounded-xl">
          <div className="w-full h-fit flex gap-1 rounded-xl p-1 ">
            <div className="w-full h-12 rounded-xl border border-border bg-secondary flex items-center text-sm justify-center ">Explore Others</div>
            <div className=" h-12 aspect-square rounded-xl bg-secondary border border-border flex items-center text-sm justify-center ">
              <Search className="size-4"/>
            </div>
            <SetupDialog
              Trigger={()=>{
                return (
                  <div className=" h-12 aspect-square rounded-xl bg-secondary border border-border flex items-center text-sm justify-center ">
                  <Settings className="size-4"/>
                </div>
                )
              }}
              Content={SettingsDialogContent}
            />
          
           
          </div>
          <span className="h-0.5 my-1 bg-muted mx-auto w-[90%]">

          </span>
           {recentLinearPatterns.length > 0 ? (
             <div className="flex flex-col gap-2">
               <h2 className="px-2 text-sm text-muted-foreground">Recently Viewed</h2>
               {recentLinearPatterns.map((pattern) => (
                 <ThumbnailPreviewerCard
                   key={pattern.key}
                   id={pattern.id}
                   width={pattern.default.width}
                   height={pattern.default.height}
                   patternUnits={pattern.default.patternUnits}
                   fill={fill}
                   fillOpacity={fillOpacity}
                   background={background}
                   path={pattern.path}
                   title={pattern.title}
                 />
               ))}
             </div>
           ) : (
             <div className="flex flex-col gap-2">
               <h2 className="px-2 text-sm text-muted-foreground">Recently Viewed</h2>
               <div className="px-2 py-4 text-sm text-muted-foreground text-center">
                 No recent patterns
               </div>
             </div>
           )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftSidebar;
