import {create} from 'zustand';

interface IdeaDetailState {
  currentVersion: number | null;

  setVersion: (version: number | null) => void;
}

export const useIdeaDetailStore = create<IdeaDetailState>((set) => ({
  currentVersion: 1,

  setVersion: (version) => set({currentVersion: version}),
}));
