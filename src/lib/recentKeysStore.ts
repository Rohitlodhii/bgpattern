import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentKeysState {
  // Map of key -> unix timestamp (ms)
  keyToTimestamp: Record<string, number>;

  // Add or update a key and refresh its timestamp
  upsertKey: (key: string, timestamp?: number) => void;

  // Remove a single key
  removeKey: (key: string) => void;

  // Clear all keys
  clearAll: () => void;
}

export const useRecentKeysStore = create<RecentKeysState>()(
  persist(
    (set, get) => ({
      keyToTimestamp: {},

      upsertKey: (key: string, timestamp?: number) => {
        const now = typeof timestamp === "number" ? timestamp : Date.now();
        const current = get().keyToTimestamp;
        set({ keyToTimestamp: { ...current, [key]: now } });
      },

      removeKey: (key: string) => {
        const current = get().keyToTimestamp;
        if (!(key in current)) return;
        const { [key]: _removed, ...rest } = current;
        set({ keyToTimestamp: rest });
      },

      clearAll: () => set({ keyToTimestamp: {} }),
    }),
    {
      name: "recent-keys-store",
      version: 1,
      // Keep only serializable state
      partialize: (state) => ({ keyToTimestamp: state.keyToTimestamp }),
    }
  )
);

// Helper selector: return keys sorted by newest first
export const selectSortedKeys = (state: RecentKeysState): string[] => {
  return Object.entries(state.keyToTimestamp)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);
};

// Helper selector: return entries sorted by newest first
export const selectSortedEntries = (
  state: RecentKeysState
): Array<{ key: string; timestamp: number }> => {
  return Object.entries(state.keyToTimestamp)
    .sort((a, b) => b[1] - a[1])
    .map(([key, timestamp]) => ({ key, timestamp }));
};


