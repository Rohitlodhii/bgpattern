import { BlendMode } from "@/types/cssproperties";
import { create } from "zustand";

// Type for gradient size
export type GradientSize =
  | "closest-side"
  | "closest-corner"
  | "farthest-side"
  | "farthest-corner"
  | string ;

export type GradientSizeMode = "keyword" | "percentage" | "ellipse" ;

interface CenterSoftGlowProps {
  bgColor: string;
  bgImageColor: string;
  bgImageColorOpacity: number;
  bgImagePosition: string;
  secondaryBg: string | "transparent";
  secondaryBgOpacity: number;
  opacity: number;
  blendMode: BlendMode;
  gradientSize: GradientSize;
  
}

interface CenterSoftGlowState extends CenterSoftGlowProps {
  setBgColor: (value: string) => void;
  setBgImageColor: (value: string) => void;
  setBgImageColorOpacity: (value: number) => void;
  setBgImagePosition: (value: string) => void;
  setSecondaryBg: (value: string) => void;
  setSecondaryBgOpacity: (value: number) => void;
  setOpacity: (value: number) => void;
  setBlendMode: (value: BlendMode) => void;
  setGradientSize: (value: GradientSize) => void;
  setAll: (values: Partial<CenterSoftGlowProps>) => void;
}

export const useCenterSoftGlowStore = create<CenterSoftGlowState>((set) => ({
  // default values
  bgColor: "#ffffff",
  bgImageColor: "#FFF991",
  bgImageColorOpacity: 20,
  bgImagePosition: "center",
  secondaryBg: "transparent",
  secondaryBgOpacity: 70,
  opacity: 0.6,
  blendMode: "multiply",
  gradientSize: "farthest-corner",


  // setters
  setBgColor: (value) => set({ bgColor: value }),
  setBgImageColor: (value) => set({ bgImageColor: value }),
  setBgImageColorOpacity: (value) => set({ bgImageColorOpacity: value }),
  setBgImagePosition: (value) => set({ bgImagePosition: value }),
  setSecondaryBg: (value) => set({ secondaryBg: value }),
  setSecondaryBgOpacity: (value) => set({ secondaryBgOpacity: value }),
  setOpacity: (value) => set({ opacity: value }),
  setBlendMode: (value) => set({ blendMode: value }),
  setGradientSize: (value) => set({ gradientSize: value }),
  

  // update multiple at once
  setAll: (values) => set(values),
}));
