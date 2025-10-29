// dotpattern-store.ts
import { create } from "zustand"

interface DotPatternState {
  spacing: number
  radius: number
  dotOpacity: number
  glow: boolean
  showGradient: boolean

  // setters
  setSpacing: (spacing: number) => void
  setRadius: (radius: number) => void
  setDotOpacity: (opacity: number) => void
  setGlow: (glow: boolean) => void
  setShowGradient: (show: boolean) => void
}

export const useDotPatternStore = create<DotPatternState>((set) => ({
  spacing: 16,
  radius: 1,
  dotOpacity: 0.8,
  glow: false,
  showGradient: true,

  setSpacing: (spacing) => set({ spacing }),
  setRadius: (radius) => set({ radius }),
  setDotOpacity: (dotOpacity) => set({ dotOpacity }),
  setGlow: (glow) => set({ glow }),
  setShowGradient: (showGradient) => set({ showGradient }),
}))
