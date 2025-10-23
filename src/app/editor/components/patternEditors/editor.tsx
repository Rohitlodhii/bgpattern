"use client";

import React, { useState } from "react";
import { useSVGStore } from "@/store/svgstore";
import ColorPicker from "@/components/input/colorpicker";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";


const SVGEditor: React.FC = () => {
  const pathsData = useSVGStore((state) => state.pathsData);
  const fills = useSVGStore((state) => state.fills);
  const fillOpacities = useSVGStore((state) => state.fillOpacities);
  const setFill = useSVGStore((state) => state.setFill);
  const setFillOpacity = useSVGStore((state) => state.setFillOpacity);
  const setPathData = useSVGStore((state) => state.setPathData);
  const resetPaths = useSVGStore((state) => state.resetPaths);

  const [editPathIndex, setEditPathIndex] = useState<number | null>(null);

  return (
    <div className="w-full md:w-80 h-[40%] md:h-full bg-secondary rounded-lg p-4 overflow-y-auto scrollbar-hidden">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        SVG Path Editor
      </h3>

      <div className="space-y-6">
        {pathsData.map((d, i) => (
          <div key={i} className="space-y-4 border-b border-border pb-4">
            {/* Path Header */}
            <div className="flex items-center justify-between">
              <h4 className="text-md font-medium text-foreground">{`Path ${
                i + 1
              }`}</h4>
              <div className="flex items-center gap-2">
                <Switch
                  id={`edit-path-${i}`}
                  checked={editPathIndex === i}
                  onCheckedChange={(checked) =>
                    setEditPathIndex(checked ? i : null)
                  }
                />
                <label
                  htmlFor={`edit-path-${i}`}
                  className="text-sm text-muted-foreground"
                >
                  Edit Path
                </label>
              </div>
            </div>

            {/* Path "d" Editor */}
            {editPathIndex === i && (
              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full p-2 border rounded text-sm font-mono scrollbar-hidden"
                  rows={3}
                  value={pathsData[i]}
                  onChange={(e) => setPathData(i, e.target.value)}
                />
                <button
                  
                  onClick={() => resetPaths()}
                >
                  Reset All Paths
                </button>
              </div>
            )}

            {/* Fill Color */}
            <div className="flex flex-col gap-2">
              <ColorPicker
                color={fills[i]}
                setColor={(color) => setFill(i, color)}
              />
            </div>

            {/* Fill Opacity */}
            <div className="flex flex-col gap-2">
              <Slider
                label="Opacity"
                value={[fillOpacities[i]]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(value) => setFillOpacity(i, value[0])}
                valueSubtext={fillOpacities[i].toFixed(2)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Reset Button for all paths */}
      <div className="mt-6">
        <button onClick={resetPaths}>
          Reset All Paths, Colors & Opacity
        </button>
      </div>
    </div>
  );
};

export default SVGEditor;
