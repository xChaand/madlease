"use client";

import { useState } from "react";

export default function NavbarItems() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return <div className="flex gap-4 h-full">NavbarItems</div>;
}
