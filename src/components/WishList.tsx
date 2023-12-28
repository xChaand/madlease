"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";

export default function WishList() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCartIcon />
      </SheetTrigger>
    </Sheet>
  );
}
