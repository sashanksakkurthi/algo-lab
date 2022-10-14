import create from "zustand";

interface SideBarState {
  openSideBar: boolean;
  setOpenSideBar: () => void;
}

export const useMenuStore = create<SideBarState>((set) => ({
  openSideBar: false,
  setOpenSideBar: () => set((state) => ({ openSideBar: !state.openSideBar })),
}));
