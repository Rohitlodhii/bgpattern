import { create } from "zustand";


// Sidebar state interface
interface SidebarState {
    isOpen: boolean;
    toggleSidebar: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
  }
  


// Sidebar store
export const useSidebarStore = create<SidebarState>((set) => ({
    isOpen: true, // Default to open
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
    openSidebar: () => set({ isOpen: true }),
    closeSidebar: () => set({ isOpen: false }),
  }));
  