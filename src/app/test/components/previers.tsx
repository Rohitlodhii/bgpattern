"use client";

import { useSVGStore } from "@/store/svgstore";
import React from "react";


const SVGPreview: React.FC = () => {
  const { width, height, viewBox, clipId, paths, fills } = useSVGStore();

  return (
    <div className="relative w-[80%] aspect-video rounded-xl overflow-hidden bg-neutral-300">
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clipPath={clipId ? `url(#${clipId})` : undefined}>
          {paths.map((p, i) => (
            <path key={i} d={p.d} fill={fills[i]} />
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
