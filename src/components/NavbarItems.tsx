"use client";

import NavbarItem from "./NavbarItem";
import { PRODUCT_CATEGORIES } from "@/config";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useRef, useState } from "react";

export default function NavbarItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const navbarRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navbarRef, () => setActiveIndex(null));
  return (
    <div className="flex gap-4 h-full" ref={navbarRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) setActiveIndex(null);
          else setActiveIndex(i);
        };

        const isOpen = i === activeIndex;

        return (
          <NavbarItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
}
