"use client";
import QuantityButton from "@/components/QuantityButton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import useCartStore from "@/zustand/store/cart";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const carts = useCartStore((state) => state.items);

  const removeItemFromCart = (id: number) => {
    useCartStore.getState().removeItem(id);
    toast({
      variant: "destructive",
      title: `Product ${id} removed from Cart`,
    });
  };

  return (
    <main>
      <section className="px-2 lg:px-[120px] py-12">
        <div className="flex gap-3">
          <Button
            variant={"outline"}
            className="rounded-full hover:bg-inherit hover:text-wprimary  gap-3 px-4 py-2 bg-transparent text-[#BCBCBC] border border-[#BCBCBC]"
          >
            <ArrowRight />
            Home
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full bg-wprimary text-white hover:bg-wprimary hover:text-white   gap-3 px-4 py-2  border border-[#BCBCBC]"
          >
            <ArrowRight />
            Cart
          </Button>
        </div>
        {carts && carts.length > 0 ? (
          <main>
            <div className="flex flex-col mt-8 text-center gap-2 text-[#161D25]">
              <span>PEEK INSIDE YOUR </span>
              <h1 className=" font-medium text-4xl">Beauty Basket</h1>
            </div>

            <div className="flex mt-10">
              <div className="w-full table border-collapse">
                <div className="hidden md:table-row bg-[#F8E1E780] border-b border-b-[#DBDBDB] *:text-start *:font-bold *:text-sm *:p-4">
                  <div className="table-cell">Product</div>
                  <div className="table-cell">Details</div>
                  <div className="table-cell">status</div>
                  <div className="table-cell">Price</div>
                  <div className="table-cell">Quantity</div>
                  <div className="table-cell">Total</div>
                  <div className="table-cell"></div>
                </div>

                <div className="h-10"></div>
                {carts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="table-row border-b *:px-2 md:*:px-6 *:py-6 mt-8"
                    >
                      <div className="table-cell align-middle">
                        <div className="flex items-center justify-center rounded-md border">
                          <Image
                            src={`/assets/favor/${item.image}`}
                            className="mt-auto "
                            alt="loading_gif"
                            width={80}
                            height={60}
                          />
                        </div>
                      </div>
                      {/** Mobile View */}
                      <div className="table-cell align-middle md:hidden">
                        <div className="flex flex-col w-full h-full">
                          <div className="flex flex-col">
                            <span className="text-wfont2 line-clamp-2 font-bold text-lg">
                              {item.name}{" "}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-wfont2 text-lg font-bold">
                              {item.status}
                            </span>
                            <span className="text-wfont2 text-lg font-bold">
                              {item.price}
                            </span>
                          </div>
                          <div className="p-1 flex gap-3">
                            <QuantityButton />
                            <Button
                              variant={"outline"}
                              className="border-[#BCBCBC] bg-transparent hover:bg-transparent hover:border-wprimary hover:text-wprimary text-[#BCBCBC]"
                              size={"icon"}
                            >
                              <Trash2 className="h-6 w-6" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/** Not available on mobile */}
                      <div className="hidden md:table-cell align-middle">
                        <div className="flex flex-col">
                          <span className="text-wfont2 text-lg font-bold">
                            {item.name}{" "}
                          </span>
                          <span>{item.price}</span>
                        </div>
                      </div>
                      <div className="hidden md:table-cell align-middle">
                        <span className="text-wfont2 text-lg">
                          {item.status}
                        </span>
                      </div>
                      <div className="hidden md:table-cellhidden md:table-cell align-middle">
                        <span className="text-wfont2 text-lg font-bold">
                          {item.price}
                        </span>
                      </div>
                      <div className="hidden md:table-cellhidden md:table-cell align-middle">
                        <div>
                          <QuantityButton />
                        </div>
                      </div>
                      <div className="hidden md:table-cell align-middle">
                        <span className="text-wfont2 text-lg font-bold">
                          {item.price}
                        </span>
                      </div>
                      <div className="hidden md:table-cell align-middle">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="border-[#BCBCBC] bg-transparent hover:bg-transparent hover:border-wprimary hover:text-wprimary text-[#BCBCBC]"
                              size={"icon"}
                            >
                              <Trash2 className="h-6 w-6" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => removeItemFromCart(item.id)}
                                className="bg-wprimary hover:bg-wprimary"
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full p-4 bg-[#F2E5D7]">
              <div className="flex flex-col my-5 gap-2">
                <div className="w-full flex items-center justify-between">
                  <span>Sub Total</span>
                  <span>£590</span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <span>Shipping</span>
                  <span>£20</span>
                </div>
              </div>
              <Separator className="bg-[#ddd]" />
              <div className="w-full flex mt-8 items-center justify-between">
                <span>
                  <strong>Total</strong>
                </span>
                <span className="text-2xl">
                  <strong>£610</strong>
                </span>
              </div>
              <Separator className="my-3 bg-[#ddd]" />
            </div>

            <div className="w-full flex items-center justify-center py-10">
              <Link href="/checkout" className="block w-full md:w-[770px]">
                <Button className="w-full bg-wprimary text-white hover:bg-wprimary">
                  Checkout
                </Button>
              </Link>
            </div>
          </main>
        ) : (
          <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
            <div className="fill-wprimary bg-wsecondary p-6 rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="200"
                  viewBox="0 0 24 24"
                  width="200"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
            </div>
            <h1 className="text-xl">
              Your cart is empty, let&apos;s go{" "}
              <Link href={"/"}>
                <span className="text-wprimary hover:underline">
                  <strong>shopping</strong>
                </span>
              </Link>
            </h1>
            <Link href={"/#favorites"}>
              <Button className="bg-wprimary mt-4 text-white hover:bg-wprimary hover:text-white">
                <Plus /> Add Product
              </Button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;
