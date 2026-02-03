"use client";

import LeftSidebar from "@/app/editor/components/LeftSidebar";
import SidebarCollapseBtn from "@/app/editor/components/ui/Sidebarcollapsebtn";
import Screensize from "@/app/editor/components/ui/Screensize";
import ToolbarGroup from "@/app/editor/components/ui/toolbar";
import PenToolCanvas from "./components/PenToolCanvas";

const page = () => {
  return (
    <div className="relative h-full w-full flex gap-2">
      <LeftSidebar />
      <div className="h-full bg-sidebar flex-1 rounded-xl flex flex-col md:flex-row lg:flex-row p-2">
        <div className="relative flex-1 flex h-full">
          <SidebarCollapseBtn />
          <ToolbarGroup />
          <Screensize />
          <PenToolCanvas />
        </div>
      </div>
    </div>
  );
};

export default page;
