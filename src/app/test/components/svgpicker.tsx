"use client";

import { useSVGStore } from "@/store/svgstore";
import React from "react";


const SVGColorPickers: React.FC = () => {
  const fills = useSVGStore((state) => state.fills);
  const setFill = useSVGStore((state) => state.setFill);

  return (
    <div className="flex gap-4 mt-4">
      {fills.map((fill, index) => (
        <div key={index} className="flex flex-col items-center">
          <input
            type="color"
            value={fill}
            onChange={(e) => setFill(index, e.target.value)}
          />
          <span className="text-sm">{`Path ${index + 1}`}</span>
        </div>
      ))}
    </div>
  );
};

export default SVGColorPickers;
