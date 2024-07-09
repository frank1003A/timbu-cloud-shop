"use client";
import useCartStore from "@/zustand/store/cart";
import useWishListStore from "@/zustand/store/wishlist";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const carts = useCartStore((state) => state.items);
  const wishList = useWishListStore((state) => state.items);
  const menus = ["about", "features", "pricing", "gallery", "team"];
  return (
    <div className="relativew-full  h-[80px] sticky inset-x-0 top-0 z-50 bg-wsecondary rounded-bl-md rounded-br-md">
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

        <div className="ml-auto flex items-center justify-start gap-1">
          <button className="text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
            <Search className="text-wfont" />
          </button>

          <Link href={"/wishlist"}>
            <div className="relative w-fit h-fit">
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent  hover:border-wprimary hover:text-wprimary">
                <Heart />
              </button>
              {wishList.length > 0 && (
                <div className="w-5 h-5 absolute bg-wprimary text-white flex items-center justify-center text-sm rounded-full -top-1 -right-2">
                  <span>{wishList.length}</span>
                </div>
              )}
            </div>
          </Link>
          <Link href={"/cart"}>
            <div className="relative w-fit h-fit">
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
                <ShoppingCart />
              </button>
              {carts.length > 0 && (
                <div className="w-5 h-5 absolute bg-wprimary text-white flex items-center justify-center text-sm rounded-full -top-1 -right-2">
                  <span>{carts.length}</span>
                </div>
              )}
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Header;
