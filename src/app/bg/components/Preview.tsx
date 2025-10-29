"use client";

import React, { useEffect } from "react";
import { useSVGStore } from "@/store/svgstore";
import { FullBackgrounds } from "@/patterns/fullbackground";
import { useScreenStore } from "@/store/screen.store";
import { CenterSoftGlow } from "@/components/backgrounds/CenterSoftGlow/CenterSoftGlow";

import { DotPatternClone } from "@/components/backgrounds/dotspattern/DotPatternClone";


interface SVGPreviewProps {
  svgKey: number;
}

const ComponentPreviewer = () => {
    const { screenType } = useScreenStore();


 

  return (
    <div className={` ${screenType === "lg" && " w-[80%] aspect-video "} ${screenType==="sm" && " w-[30%] aspect-9/16 "} ${screenType==="md" && " w-[30%] aspect-3/4 "} rounded-xl overflow-hidden bg-neutral-300  border border-border`}>
        <DotPatternClone/>
      
    </div>
  );
};

export default ComponentPreviewer;
