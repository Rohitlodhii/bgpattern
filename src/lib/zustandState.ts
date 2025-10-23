import { create } from "zustand";


// Color state for shared fill, fillOpacity, and background
interface ColorState {
  fill: string;
  fillOpacity: number;
  background: string;
  setFill: (fill: string) => void;
  setFillOpacity: (opacity: number) => void;
  setBackground: (background: string) => void;
}

export const useColorStore = create<ColorState>((set) => ({
  fill: "#9C92AC",
  fillOpacity: 0.2,
  background: "#DFDBE5",
  setFill: (fill) => set({ fill }),
  setFillOpacity: (fillOpacity) => set({ fillOpacity }),
  setBackground: (background) => set({ background }),
}));


interface PatternState {
  // Pattern identification
  key: number;
  id: string;
  title: string;
  
  // Pattern properties
  width: number;
  height: number;
  patternUnits: "userSpaceOnUse" | "objectBoundingBox";
  fill: string;
  fillOpacity: number;
  background: string;
  bgOpacity : number;
  path: string;
  
  // Actions
  setPattern: (pattern: any) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setPatternUnits: (units: "userSpaceOnUse" | "objectBoundingBox") => void;
  setFill: (fill: string) => void;
  setFillOpacity: (opacity: number) => void;
  setBackground: (background: string) => void;
  setBgOpacity : ( bgOpacity : number) => void;
  setPath: (path: string) => void;
  loadPatternByKey: (key: number, patterns: any[]) => void;
}

export const usePatternStore = create<PatternState>((set) => ({
  // Default values
  key: 1,
  id: "pattern-bg",
  title: "Diagonal Stripes",
  width: 40,
  height: 40,
  patternUnits: "userSpaceOnUse",
  // Use values from color store as defaults
  fill: useColorStore.getState().fill,
  fillOpacity: useColorStore.getState().fillOpacity,
  background: useColorStore.getState().background,
  bgOpacity : 1.0,
  path: "M0 40L40 0H20L0 20M40 40V20L20 40",
  
  // Actions
  setPattern: (pattern) => set({
    key: pattern.key,
    id: pattern.id,
    title: pattern.title,
    width: pattern.default.width,
    height: pattern.default.height,
    patternUnits: pattern.default.patternUnits,
    fill: pattern.default.fill,
    fillOpacity: pattern.default.fillOpacity,
    background: pattern.default.background,
    bgOpacity:pattern.default.bgOpacity,
    path: pattern.path,
  }),
  
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setPatternUnits: (patternUnits) => set({ patternUnits }),
  setFill: (fill) => set({ fill }),
  setFillOpacity: (fillOpacity) => set({ fillOpacity }),
  setBackground: (background) => set({ background }),
  setBgOpacity : (bgOpacity)=>set({ bgOpacity}),
  setPath: (path) => set({ path }),
  
  loadPatternByKey: (key, patterns) => {
    const pattern = patterns.find(p => p.key === key);
    if (pattern) {
      set({
        key: pattern.key,
        id: pattern.id,
        title: pattern.title,
        width: pattern.default.width,
        height: pattern.default.height,
        patternUnits: pattern.default.patternUnits,
        fill: pattern.default.fill,
        fillOpacity: pattern.default.fillOpacity,
        background: pattern.default.background,
        path: pattern.path,
      });
    }
  },
}));

