"use client";
import useCartStore from "@/zustand/store/cart";
import useWishListStore from "@/zustand/store/wishlist";
import { Heart, LinkIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";

import useActiveProduct from "@/zustand/store/activeproduct";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Products, products2 } from "./data";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const carts = useCartStore((state) => state.items);
  const wishList = useWishListStore((state) => state.items);
  const menus = ["about", "features", "pricing", "gallery", "team"];
  const [open, setOpen] = useState(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const filteredProducts = searchValue
    ? [...Products, ...products2].filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const addProduct = useActiveProduct((state) => state.addActiveProduct);
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
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
                <Search />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  max-h-[500px]  border-2 border-wprimary">
              <DialogTitle className="sr-only">Search for product</DialogTitle>
              <DialogHeader></DialogHeader>
              <Label htmlFor="name" className="sr-only text-right">
                Search
              </Label>
              <Input
                className="mt-5 focus-visible:ring-wprimary"
                placeholder="Seach Products"
                onChange={handleSearch}
              />

              <div className="flex flex-col gap-2 overflow-y-auto  max-h-[300px]">
                {searchValue && filteredProducts.length > 0 ? (
                  filteredProducts.map((item) => (
                    <>
                      <Link href={`/products/${item.id}`}>
                        <button
                          key={item.id}
                          onClick={() => {
                            addProduct(item);
                            setOpen(false);
                            setSearchValue("");
                          }}
                          className="group p-2  w-full rounded-lg hover:bg-wsecondary"
                        >
                          <div className="flex gap-2 items-center">
                            <Image
                              src={`/assets/favor/${item.image}`}
                              alt="search illustration"
                              width={40}
                              height={40}
                            />
                            <div className="flex flex-col text-start">
                              <h3 className="font-bold">{item.name}</h3>
                              <p>{item.description}</p>
                            </div>

                            <span className="ml-auto">
                              <LinkIcon className="w-4 h-4 hidden group-hover:block" />
                            </span>
                          </div>
                        </button>
                      </Link>

                      <Separator />
                    </>
                  ))
                ) : (
                  <div className="flex items-center justify-center">
                    <Image
                      src={"/assets/search.svg"}
                      alt="search illustration"
                      width={200}
                      height={200}
                    />
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <Link href={"/wishlist"}>
            <div className="relative w-fit h-fit">
              <button className="text-wfont rounded-full p-2 transition-all border border-transparent  hover:border-wprimary hover:text-wprimary">
                <Heart />
              </button>
              {wishList.length > 0 && (
                <div className="absolute inline-flex items-center justify-center py-0 px-1.5 text-xs font-normal text-white bg-wprimary border-2 border-white rounded-full -top-2 -right-1">
                  {wishList.length}
                </div>
              )}
            </div>
          </Link>
          <Link href={"/cart"}>
            <button className="relative text-wfont rounded-full p-2 transition-all border border-transparent hover:border-wprimary hover:text-wprimary">
              <ShoppingCart />
              {carts.length > 0 && (
                <span className="absolute text-xs inline-flex items-center justify-center py-0 px-1.5 leading-4 font-normal text-white bg-wprimary border-2 border-white rounded-full -top-2 -right-1">
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
