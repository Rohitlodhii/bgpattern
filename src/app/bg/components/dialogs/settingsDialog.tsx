import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/CustomDialog";
import SetupDialog from "./SetupDialog";
import { ChevronRight, Palette, Settings, Sun } from "lucide-react";
import ColorPicker from "@/components/input/colorpicker";
import { useColorStore } from "@/lib/zustandState";
import ThemeToggle from "@/components/themeToggle";



const ColorsTab = () => {
    
    const { fill, fillOpacity, background, setFill, setFillOpacity, setBackground } = useColorStore();

    return (
        <div className="w-full h-full flex flex-col p-4 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm font-medium">Fill Color</span>
              <ColorPicker color={fill} setColor={setFill}/>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm font-medium">Background Color</span>
              <ColorPicker color={background} setColor={setBackground}/>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm font-medium">Fill Opacity</span>
              <input
                type="number"
                min="0"
                max="1"
                step="0.1"
                value={fillOpacity}
                onChange={(e) => setFillOpacity(parseFloat(e.target.value))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
    )
}




const SettingsDialogContent = ({}) => {

    const [ currentTab , setCurrentTab ] = useState(1);

  return (
    <div className=" flex w-full h-96">
      <div className=" w-[30%] h-full border-r border-border flex flex-col justify-between  ">
          <div className="flex flex-col">
          <div className="  h-14 flex items-center px-4  border-b border-border gap-2">
            <Settings className="size-5" />
            <span className="font-medium  text-lg">Settings</span>
          </div>
          <div className="w-full   py-4 px-2">
            <ul className="flex flex-col gap-1">
              <li  onClick={()=>setCurrentTab(1)} className={`${currentTab ===1 && "border border-border shadow-[inset_-12px_-8px_40px_#46464620]"} h-14 rounded-xl flex items-center  gap-2 p-1 cursor-pointer`}>
                <span className="bg-background flex items-center justify-center border border-border h-full rounded-xl aspect-square">
                  <Palette className="size-5" />
                </span>
                <span className="text-sm font-medium ">Global Colors</span>
              </li>
              <li onClick={()=>setCurrentTab(2)} className={`${currentTab ===2 && "border border-border shadow-[inset_-12px_-8px_40px_#46464620]"} h-14 rounded-xl flex items-center  gap-2 p-1 cursor-pointer`}>
                <span className="bg-background flex items-center justify-center border border-border h-full rounded-xl aspect-square">
                  <Sun className="size-4" />
                </span>
                <span className="text-sm  font-medium">Color Theme</span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-30  w-full  bottom-1  p-2">
            <div className="bg-secondary w-full h-full rounded-xl">

            </div>
        </div>
      </div>
      <div className="flex-1 h-full">
            { currentTab === 1 && <ColorsTab/>}
            { currentTab === 2 && <div>
                <ThemeToggle/>
              </div>}
      </div>
    </div>
  );
};

export default SettingsDialogContent;
