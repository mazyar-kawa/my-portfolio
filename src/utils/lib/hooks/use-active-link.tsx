import { create } from "zustand";

interface StoreState {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const useActiveLink = create<StoreState>((set) => ({
  activeLink: "#home",
  setActiveLink: (link: string) => set({ activeLink: link }),
}));

export default useActiveLink;
