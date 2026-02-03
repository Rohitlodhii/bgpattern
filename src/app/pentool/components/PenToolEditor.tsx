"use client";

import React from "react";
import ColorPicker from "@/components/input/colorpicker";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

type PenToolEditorProps = {
  smoothPath: boolean;
  setSmoothPath: (value: boolean) => void;
  clipFill: string;
  setClipFill: (value: string) => void;
  borderColor: string;
  setBorderColor: (value: string) => void;
  borderBlur: number;
  setBorderBlur: (value: number) => void;
  borderWidth: number;
  setBorderWidth: (value: number) => void;
  canvasColor: string;
  setCanvasColor: (value: string) => void;
  onUndoPoint: () => void;
  onResetPoints: () => void;
};

const PenToolEditor = ({
  smoothPath,
  setSmoothPath,
  clipFill,
  setClipFill,
  borderColor,
  setBorderColor,
  borderBlur,
  setBorderBlur,
  borderWidth,
  setBorderWidth,
  canvasColor,
  setCanvasColor,
  onUndoPoint,
  onResetPoints,
}: PenToolEditorProps) => {
  return (
    <div className="w-full md:w-80 h-[40%] md:h-full bg-secondary rounded-lg p-4 overflow-y-auto scrollbar-hidden">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Pen Tool Controls
      </h3>

      <div className="space-y-6">
        <div className="space-y-4 border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Smooth path</span>
            <Switch
              checked={smoothPath}
              onCheckedChange={(checked) => setSmoothPath(checked)}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Toggle between sharp corners and smoothed curves.
          </p>
        </div>

        <div className="space-y-4 border-b border-border pb-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">
              Clip path fill
            </span>
            <ColorPicker color={clipFill} setColor={setClipFill} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Canvas background</span>
            <ColorPicker color={canvasColor} setColor={setCanvasColor} />
          </div>
        </div>

        <div className="space-y-4 border-b border-border pb-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">Border color</span>
            <ColorPicker color={borderColor} setColor={setBorderColor} />
          </div>
          <div className="flex flex-col gap-2">
            <Slider
              label="Border width"
              value={[borderWidth]}
              min={1}
              max={12}
              step={1}
              onValueChange={(value) => setBorderWidth(value[0])}
              valueSubtext={borderWidth}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Slider
              label="Border blur"
              value={[borderBlur]}
              min={0}
              max={24}
              step={0.5}
              onValueChange={(value) => setBorderBlur(value[0])}
              valueSubtext={borderBlur}
            />
          </div>
        </div>

        <div className="space-y-3">
          <button
            className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground"
            onClick={onUndoPoint}
          >
            Undo last point
          </button>
          <button
            className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground"
            onClick={onResetPoints}
          >
            Reset all points
          </button>
        </div>
      </div>
    </div>
  );
};

export default PenToolEditor;
