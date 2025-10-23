import { create } from "zustand";
import { FullBackgrounds } from "@/patterns/fullbackground";

export interface SVGPath {
  d: string;
  fill: string;
  fillOpacity?: number; // optional
}

interface SVGState {
  width: number;
  height: number;
  viewBox: string;
  clipId?: string;
  fills: string[];
  fillOpacities: number[];
  pathsData: string[];
  paths: SVGPath[];
  originalSVG?: {
    width: number;
    height: number;
    viewBox: string;
    clipId?: string;
    paths: SVGPath[];
  }; // store original
  setFill: (index: number, color: string) => void;
  setFillOpacity: (index: number, opacity: number) => void;
  setPathData: (index: number, d: string) => void;
  loadSVG: (svgData: { width: number; height: number; viewBox: string; clipId?: string; paths: SVGPath[] }) => void;
  resetPaths: () => void;
}

export const useSVGStore = create<SVGState>((set, get) => ({
  width: 0,
  height: 0,
  viewBox: "0 0 0 0",
  clipId: undefined,
  fills: [],
  fillOpacities: [],
  pathsData: [],
  paths: [],
  originalSVG: undefined,

  setFill: (index, color) =>
    set((state) => {
      const newFills = [...state.fills];
      newFills[index] = color;
      return { fills: newFills };
    }),

  setFillOpacity: (index, opacity) =>
    set((state) => {
      const newOpacities = [...state.fillOpacities];
      newOpacities[index] = opacity;
      return { fillOpacities: newOpacities };
    }),

  setPathData: (index, d) =>
    set((state) => {
      const newPaths = [...state.pathsData];
      newPaths[index] = d;
      return { pathsData: newPaths };
    }),

  loadSVG: ({ width, height, viewBox, clipId, paths }) => {
    set({
      width,
      height,
      viewBox,
      clipId,
      paths,
      fills: paths.map((p) => p.fill),
      fillOpacities: paths.map((p) => p.fillOpacity ?? 1),
      pathsData: paths.map((p) => p.d),
      originalSVG: { width, height, viewBox, clipId, paths }, // store original
    });
  },

  resetPaths: () => {
    const state = get();
    const original = state.originalSVG;
    if (!original) return;

    set({
      width: original.width,
      height: original.height,
      viewBox: original.viewBox,
      clipId: original.clipId,
      paths: original.paths,
      fills: original.paths.map((p) => p.fill),
      fillOpacities: original.paths.map((p) => p.fillOpacity ?? 1),
      pathsData: original.paths.map((p) => p.d),
    });
  },
}));
