import { create } from "zustand";

type Store = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useThankStore = create<Store>()((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
