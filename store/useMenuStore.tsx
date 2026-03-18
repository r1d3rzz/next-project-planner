import { create } from "zustand";

type Menu = {
  name: string;
  href: string;
  is_active: boolean;
};

type MenuState = {
  menu: Menu[];
  makeActive: (name: string) => void;
};

const useMenuStore = create<MenuState>()((set) => ({
  menu: [
    { name: "Home", href: "/", is_active: true },
    { name: "Create", href: "/create", is_active: false },
  ],
  makeActive: (name: string) =>
    set((state) => ({
      menu: state.menu.map((el) =>
        el.name == name
          ? { ...el, is_active: true }
          : { ...el, is_active: false },
      ),
    })),
}));

export default useMenuStore;
