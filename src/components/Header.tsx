"use client";
import useCartStore from "@/zustand/store/cart";
import useWishListStore from "@/zustand/store/wishlist";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Header = () => {
  const carts = useCartStore((state) => state.items);
  const wishList = useWishListStore((state) => state.items);
  const menus = ["about", "features", "pricing", "gallery", "team"];
  return (
    <div className="relativew-full h-[80px] sticky inset-x-0 top-0 z-50 bg-wsecondary border-b border-b-zinc-300 md:border-none">
      <main className="absolute left-0 right-0 flex items-center justify-start h-full py-4 px-4 lg:px-[120px]">
        <Logo />

        <ul className="gap-8 ml-10 hidden lg:flex">
          {menus.map((menu) => {
            return (
              <li
                className="capitalize hover:text-wprimary hover:font-normal text-[16px] text-wfont"
                key={menu}
              >
                <Link href={"#"}>{menu}</Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center justify-start gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
                <Search />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-2 border-wprimary">
              <DialogHeader>
                <Label htmlFor="name" className="sr-only text-right">
                  Search
                </Label>
                <Input defaultValue="Search" />
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div></div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Link href={"/wishlist"}>
            <div className="relative w-fit h-fit">
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent  hover:border-wprimary hover:text-wprimary">
                <Heart />
              </button>
              {wishList.length > 0 && (
                <div className="absolute inline-flex items-center justify-center h-2 w-2 p-1.5 text-xs font-normal text-white bg-wprimary border-2 border-white rounded-full -top-2 -right-1">
                  {wishList.length}
                </div>
              )}
            </div>
          </Link>
          <Link href={"/cart"}>
            <button className="relative text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
              <ShoppingCart />
              {carts.length > 0 && (
                <span className="absolute text-xs inline-flex items-center justify-center h-2 w-2 p-1.5 leading-4 font-normal text-white bg-wprimary border-2 border-white rounded-full -top-2 -right-1">
                  {carts.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Header;
