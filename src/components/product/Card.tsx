import { cn } from "@/lib/utils";
import useActiveProduct from "@/zustand/store/activeproduct";
import useCartStore from "@/zustand/store/cart";
import useWishListStore from "@/zustand/store/wishlist";
import { Heart, Link2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../data";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface CardProps {
  item: Product;
  hasDiscount?: boolean;
}
const Card = ({ item, hasDiscount }: CardProps) => {
  const carts = useCartStore((state) => state.items);
  const wishList = useWishListStore((state) => state.items);
  const addProduct = useActiveProduct((state) => state.addActiveProduct);
  const { toast } = useToast();
  const addItemToCart = (item: Product) => {
    useCartStore.getState().addItem(item);
  };

  const addItemToWishList = (item: Product) => {
    useWishListStore.getState().addItem(item);
  };

  const simulateAddToCart = () => {
    addItemToCart(item);
    toast({
      title: `Product ${item.name} added to Cart`,
      description: "Visit the cart page to checkout",
      className: "border border-wprimary",
    });
  };

  const simulateAddToWishList = () => {
    addItemToWishList(item);
    toast({
      title: `Product ${item.name} added to WishList`,
      description: "Items on wish list are marked with Heart",
      className: "border border-yellow-5",
    });
  };

  const existingCartItem = carts.find((i) => i.id === item.id);
  const existingWishItem = wishList.find((i) => i.id === item.id);

  console.log("wishlist", wishList);
  return (
    <div className="group bg-wcard border min-w-0 md:min-w-[260px] h-[290px] border-wcardborder rounded-lg overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="relative transition-all flex items-center justify-center h-full">
          {item?.status === undefined && hasDiscount ? (
            <div className="capitalize absolute top-4 left-4 flex items-center border border-[#781C34] rounded-lg px-1 justify-center gap-0 bg-[#E17E98E5] text-[#571426">
              -20%
            </div>
          ) : !hasDiscount ? null : (
            <div className="capitalize absolute top-4 left-4 flex items-center border border-[#781C34] rounded-lg px-1 justify-center gap-0 bg-[#E17E98E5] text-[#571426">
              {item.status}
            </div>
          )}

          {
            /** WishList Indicator */
            existingWishItem && (
              <div className="absolute right-3 top-3 bg-transparent hover:bg-transparent rounded-full transition-all ">
                <span className="fill-wprimary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                  </svg>
                </span>
              </div>
            )
          }
          <Image
            src={`/assets/favor/${item?.image}`}
            className="mt-auto"
            alt="loading_gif"
            width={120}
            height={180}
          />
          <div className="absolute transition-all group-hover:animate-in animate-out hidden group-hover:block inset-0 bg-black/20">
            <div className="flex w-full h-full items-center gap-2 justify-center">
              <Button
                className={cn(
                  "disabled:cursor-not-allowed bg-transparent focus:scale-110 transition-all rounded-full ",
                  "border border-wprimary hover:text-white hover:bg-wprimary bg-wsecondary text-wprimary "
                )}
                size={"icon"}
                variant={"outline"}
                onClick={simulateAddToCart}
                disabled={existingCartItem ? true : false}
              >
                <ShoppingCart className="h-6 w-6" />
              </Button>
              <Button
                className={cn(
                  "disabled:cursor-not-allowed bg-transparent focus:scale-110 transition-all rounded-full ",
                  "border border-wprimary hover:text-white hover:bg-wprimary bg-wsecondary text-wprimary "
                )}
                size={"icon"}
                variant={"outline"}
                onClick={simulateAddToWishList}
                disabled={existingWishItem ? true : false}
              >
                <Heart className="h-6 w-6" />
              </Button>
              <Link href={`/products/${item.id}`}>
                <Button
                  className="bg-transparent rounded-full transition-all border-none hover:text-white hover:bg-wprimary bg-wsecondary text-wprimary "
                  size={"icon"}
                  variant={"outline"}
                  onClick={() => {
                    addProduct(item);
                  }}
                >
                  <Link2 className="h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white px-4 py-2 items-start text-left">
          <h2 className="text-[#5F5F5F]">{item?.name}</h2>
          <span className="font-bold text-base text-[#7E7E7E] line-clamp-1">
            {item?.description}
          </span>
          <div className="flex w-full items-center justify-between py-2">
            <span className="font-bold text-xl text-[#571426]">
              {item?.price}
            </span>
            <div className="flex items-center border border-[#781C34] rounded-sm px-1 justify-center gap-0 bg-[#F8E1E7] text-wprimary">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.32489 19.5834L8.56489 14.2704L4.44189 10.6984L9.87289 10.2284L11.9999 5.21741L14.1269 10.2274L19.5569 10.6974L15.4339 14.2694L16.6749 19.5824L11.9999 16.7624L7.32489 19.5834Z"
                  fill="#EFB319"
                />
              </svg>
              <div className="text-wprimary font-medium">{item?.rating}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
