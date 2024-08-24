import { create } from "zustand";

type Store = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useOrderStore = create<Store>()((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
