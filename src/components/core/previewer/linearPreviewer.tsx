"use client"
import { LinearPatterns } from "@/patterns/linear";
import { usePatternStore } from "@/lib/zustandState";
import { useEffect } from "react";
import { useTheme } from "next-themes";

const LinearSvgThumbNail = ( { keyData} : { keyData : number } ) => {

    let currentPatternShownKey = 6;
    
    // Get pattern data from Zustand store
    const svgData = LinearPatterns.find((bg) => bg.key === keyData);
    const { theme } = useTheme();
    
    let background = "#fff"
    let fill = "#000"

    useEffect(()=>{
        background = "#000"
        fill="#fff"
        console.log("changes")
    },[theme])

  return (
    <div className="w-full h-full bg-neutral-500  rounded-xl overflow-hidden">
    <svg
      className="w-full h-full"
      
      style={{ backgroundColor: background , opacity : 1 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      
    >
      <defs>
        <pattern
          id={svgData?.id}
          width={svgData?.default.width}
          height={svgData?.default.height}
          patternUnits={svgData?.default.patternUnits}
        >
          <g fill={fill} fillOpacity={0.5} fillRule="evenodd">
            <path d={svgData?.path}/>
          </g>
        </pattern>
      </defs>
  
      
      <rect width="100%" height="100%" fill={`url(#${svgData?.id})`} />
    </svg>
  </div>
  
  )
}

export default LinearSvgThumbNail 
