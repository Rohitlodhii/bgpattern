"use client";

import React, { useEffect } from "react";
import { useSVGStore } from "@/store/svgstore";
import { FullBackgrounds } from "@/patterns/fullbackground";
import { useScreenStore } from "@/store/screen.store";

interface SVGPreviewProps {
  svgKey: number;
}

const SVGPreview: React.FC<SVGPreviewProps> = ({ svgKey }) => {
  const { width, height, viewBox, clipId, paths, fills, fillOpacities, loadSVG } = useSVGStore();

  const { screenType } = useScreenStore();


  // Load SVG by key
  useEffect(() => {
    const svgData = FullBackgrounds.find((bg) => bg.key === svgKey);
    if (svgData) {
      loadSVG({
        width: svgData.default.width,
        height: svgData.default.height,
        viewBox: svgData.default.viewBox,
        clipId: svgData.default.clipId,
        paths: svgData.paths,
      });
    }
  }, [svgKey, loadSVG]);

  return (
    <div className={`relative ${screenType === "lg" && " w-[80%] aspect-video "} ${screenType==="sm" && " w-[30%] aspect-9/16 "} ${screenType==="md" && " w-[30%] aspect-3/4 "} rounded-xl overflow-hidden bg-neutral-300`}>
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio={screenType==="lg"? "xMidYMid meet" : "xMidYMid slice"}
       
        className="object-cover"
      >
        <g clipPath={clipId ? `url(#${clipId})` : undefined}>
          {paths.map((p, i) => (
            <path key={i} d={p.d} fill={fills[i]} fillOpacity={fillOpacities[i]} />
          ))}
        </g>

        {clipId && (
          <defs>
            <clipPath id={clipId}>
              <rect width={width} height={height} fill="white" />
            </clipPath>
          </defs>
        )}
      </svg>
    </div>
  );
};

export default SVGPreview;
