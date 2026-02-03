"use client";

import React, { useState } from "react";
import LeftSidebar from "@/app/editor/components/LeftSidebar";
import SidebarCollapseBtn from "@/app/editor/components/ui/Sidebarcollapsebtn";
import ToolbarGroup from "@/app/editor/components/ui/toolbar";
import Screensize from "@/app/editor/components/ui/Screensize";
import PenToolCanvas from "./components/PenToolCanvas";
import PenToolEditor from "./components/PenToolEditor";

type Point = { x: number; y: number };

const initialPoints: Point[] = [
  { x: 180, y: 120 },
  { x: 560, y: 120 },
  { x: 640, y: 260 },
  { x: 460, y: 380 },
  { x: 240, y: 320 },
];

const PenToolPage = () => {
  const [points, setPoints] = useState<Point[]>(initialPoints);
  const [smoothPath, setSmoothPath] = useState(true);
  const [clipFill, setClipFill] = useState("#fb923c");
  const [canvasColor, setCanvasColor] = useState("#0f172a");
  const [borderColor, setBorderColor] = useState("#f8fafc");
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderBlur, setBorderBlur] = useState(6);

  const handleUndoPoint = () => {
    setPoints((prev) => prev.slice(0, -1));
  };

  const handleResetPoints = () => {
    setPoints(initialPoints);
  };

  return (
    <div className="relative h-full w-full flex gap-2">
      <LeftSidebar />
      <div className="h-full bg-sidebar flex-1 rounded-xl flex flex-col md:flex-row lg:flex-row p-2">
        <div className="relative flex-1 flex items-center justify-center h-full">
          <SidebarCollapseBtn />
          <ToolbarGroup />
          <Screensize />
          <PenToolCanvas
            points={points}
            setPoints={setPoints}
            smoothPath={smoothPath}
            clipFill={clipFill}
            borderColor={borderColor}
            borderBlur={borderBlur}
            borderWidth={borderWidth}
            canvasColor={canvasColor}
          />
        </div>
        <PenToolEditor
          smoothPath={smoothPath}
          setSmoothPath={setSmoothPath}
          clipFill={clipFill}
          setClipFill={setClipFill}
          borderColor={borderColor}
          setBorderColor={setBorderColor}
          borderBlur={borderBlur}
          setBorderBlur={setBorderBlur}
          borderWidth={borderWidth}
          setBorderWidth={setBorderWidth}
          canvasColor={canvasColor}
          setCanvasColor={setCanvasColor}
          onUndoPoint={handleUndoPoint}
          onResetPoints={handleResetPoints}
        />
      </div>
    </div>
  );
};

export default PenToolPage;
