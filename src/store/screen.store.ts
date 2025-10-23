import { create } from "zustand";

type ScreenType = "lg" | "md" | "sm";

interface ScreenState {
  screenType: ScreenType;
  setScreenType: (type: ScreenType) => void;
}

export const useScreenStore = create<ScreenState>((set) => ({
  screenType: "lg",
  setScreenType: (type) => set({ screenType: type }),
}));
