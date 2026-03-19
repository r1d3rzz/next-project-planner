import { create } from "zustand";

type Menu = {
  name: string;
  href: string;
  is_active: boolean;
};

type MenuState = {
  menu: Menu[];
  makeActive: (name: string) => void;
  makeAllUnActive: () => void;
};

const useMenuStore = create<MenuState>()((set) => ({
  menu: [
    { name: "Home", href: "/", is_active: true },
    { name: "Create", href: "/create", is_active: false },
  ],
  makeActive: (href: string) =>
    set((state) => ({
      menu: state.menu.map((el) =>
        el.href == href
          ? { ...el, is_active: true }
          : { ...el, is_active: false },
      ),
    })),
  makeAllUnActive: () =>
    set((state) => ({
      menu: state.menu.map((el) => ({
        ...el,
        is_active: false,
      })),
    })),
}));

export default useMenuStore;
