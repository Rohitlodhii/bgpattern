"use client";

import { FullBackgrounds } from "@/patterns/fullbackground";
import { useSVGStore } from "@/store/svgstore";
import React, { useEffect } from "react";
import SVGPreview from "./components/previers";
import SVGColorPickers from "./components/svgpicker";


export default function page() {
  const loadSVG = useSVGStore((state) => state.loadSVG);

  useEffect(() => {
    const svgData = FullBackgrounds[1];
    loadSVG({
      width: svgData.default.width,
      height: svgData.default.height,
      viewBox: svgData.default.viewBox,
      clipId: svgData.default.clipId,
      paths: svgData.paths,
    });
  }, [loadSVG]);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-xl font-bold">Dynamic SVG Preview</h1>
      <SVGPreview />
      <SVGColorPickers />
    </div>
  );
}
