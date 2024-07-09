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
          <button className="text-wfont rounded-full p-2 transition-all border border-[#ddd] hover:border-wprimary hover:text-wprimary">
            <Search className="text-wfont" />
          </button>

          <Link href={"/wishlist"}>
            <div className="relative w-fit h-fit">
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent  hover:border-wprimary hover:text-wprimary">
                <Heart />
              </button>
              {wishList.length > 0 && (
                <div className="absolute inline-flex items-center justify-center py-0.5 px-1.5 text-xs font-normal text-white bg-wprimary border-2 border-white rounded-full -top-2 -right-1">
                  {wishList.length}
                </div>
              )}
            </div>
          </Link>
          <Link href={"/cart"}>
            <button className="relative text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
              <ShoppingCart />
              {carts.length > 0 && (
                <span className="absolute text-xs inline-flex items-center justify-center py-0.5 px-1.5 font-normal text-white bg-wprimary border-2 border-white rounded-full -top-2 -right-1">
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
