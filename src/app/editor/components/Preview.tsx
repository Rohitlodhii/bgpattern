"use client"
import { LinearPatterns } from "@/patterns/linear";
import { usePatternStore } from "@/lib/zustandState";
import { useEffect } from "react";

const SVGPreview  = () => {

    let currentPatternShownKey = 6;
    
    // Get pattern data from Zustand store
    const {
        id,
        width,
        height,
        patternUnits,
        fill,
        fillOpacity,
        background,
        bgOpacity,
        path,
        loadPatternByKey
    } = usePatternStore();
    
    // Load pattern data into store based on currentPatternShownKey
    useEffect(() => {
        loadPatternByKey(currentPatternShownKey, LinearPatterns);
    }, [currentPatternShownKey, loadPatternByKey]);

  return (
    <div className="aspect-video bg-neutral-500 w-[80%] rounded-xl overflow-hidden">
    <svg
      className="w-full h-full"
      
      style={{ backgroundColor: background , opacity : bgOpacity}}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits={patternUnits}
        >
          <g fill={fill} fillOpacity={fillOpacity} fillRule="evenodd">
            <path d={path}/>
          </g>
        </pattern>
      </defs>
  
      
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  </div>
  
  )
}

export default SVGPreview 
