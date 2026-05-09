"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AchievementId =
  | "explorer"
  | "sky"
  | "proud"
  | "critic"
  | "sociable"
  | "wanderer";

export interface Achievement {
  id: AchievementId;
  title: string;
  desc: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "explorer",  title: "Explorer",     desc: "Click the door to enter" },
  { id: "sky",       title: "Sky Walker",   desc: "Scroll through my story" },
  { id: "proud",     title: "Proud Reader", desc: "See what I've earned" },
  { id: "critic",    title: "Art Critic",   desc: "Click a project to inspect" },
  { id: "sociable",  title: "Sociable",     desc: "Find a contact method" },
  { id: "wanderer",  title: "Wanderer",     desc: "Reach the end of the journey" },
];

interface AchievementsState {
  unlocked: AchievementId[];
  soundEnabled: boolean;
  panelOpen: boolean;
  unlock: (id: AchievementId) => boolean;
  togglePanel: () => void;
  toggleSound: () => void;
}

export const useAchievements = create<AchievementsState>()(
  persist(
    (set, get) => ({
      unlocked: [],
      soundEnabled: false,
      panelOpen: false,
      unlock(id) {
        if (get().unlocked.includes(id)) return false;
        set((s) => ({ unlocked: [...s.unlocked, id] }));
        return true;
      },
      togglePanel() {
        set((s) => ({ panelOpen: !s.panelOpen }));
      },
      toggleSound() {
        set((s) => ({ soundEnabled: !s.soundEnabled }));
      },
    }),
    { name: "leema-achievements" }
  )
);
