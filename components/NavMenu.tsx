"use client";

import useMenuStore from "@/store/useMenuStore";
import { useRouter } from "next/navigation";
import React from "react";

const NavMenu = () => {
  const { menu, makeActive } = useMenuStore();
  const router = useRouter();
  const navBtnHandler = (href: string) => {
    makeActive(href);
    router.push(href);
  };
  return (
    <div className="text-center">
      {menu.map((el) => (
        <button
          key={el.name}
          className={`me-2 last:me-0 font-semibold ${el.is_active ? "text-green-400" : null}`}
          onClick={() => navBtnHandler(el.href)}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default NavMenu;
