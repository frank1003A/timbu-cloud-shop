"use client";
import { Product } from "@/components/data";
import QuantityButton from "@/components/QuantityButton";
import Rating from "@/components/rating/rating";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import useActiveProduct from "@/zustand/store/activeproduct";
import useCartStore from "@/zustand/store/cart";
import useWishListStore from "@/zustand/store/wishlist";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const reviews = [
  {
    image: "/assets/reviews/ava_1.png",
    name: "Raphael O.",
    rating: 4,
    title: "The Estee Lauder Eye Cream",
    content:
      "is a game-changer in my skincare routine, providing noticeable reduction in fine lines and puffiness around my eyes.",
    attachments: ["/assets/reviews/item_1.png"],
  },
  {
    image: "/assets/reviews/ava_2.png",
    name: "Faith A.",
    rating: 5,
    title: "Its Lightweight Formula",
    content:
      "absorbs quickly, So far I really am enjoying it and it gives my skin a smooth and fresh look morning and night!",
    attachments: ["/assets/reviews/item_1.png", "/assets/reviews/item_2.png"],
  },
  {
    image: "/assets/reviews/ava_3.png",
    name: "Cynthia M.",
    rating: 5,
    title: "It Works So Well",
    content:
      "leaving my skin feeling hydrated and refreshed without any greasy residue. After just a few weeks of use, my under-eye area looks brighter and more youthful.",
    attachments: ["/assets/reviews/item_3.png", "/assets/reviews/item_4.png"],
  },
];
const Productpage = () => {
  const activeProduct = useActiveProduct((state) => state.product);
  const [review, setReview] = useState(false);
  const router = useRouter();

  const toggleReview = () => {
    setReview(!review);
  };

  const carts = useCartStore((state) => state.items);
  const wishList = useWishListStore((state) => state.items);
  const { toast } = useToast();
  const addItemToCart = (item: Product) => {
    useCartStore.getState().addItem(item);
  };

  const addItemToWishList = (item: Product) => {
    useWishListStore.getState().addItem(item);
  };

  const existingCartItem = carts.find((i) => i.id === activeProduct.id);
  const existingWishItem = wishList.find((i) => i.id === activeProduct.id);

  const simulateAddToCart = () => {
    if (existingCartItem) {
      toast({
        title: `Product ${activeProduct.name} is already added to Cart`,
        description: "Visit the cart page to checkout",
        className: "border border-wprimary",
      });
      return;
    }
    addItemToCart(activeProduct);
    toast({
      title: `Product ${activeProduct.name} added to Cart`,
      description: "Visit the cart page to checkout",
      className: "border border-wprimary",
    });
    router.push("/cart");
  };

  const simulateAddToWishList = () => {
    addItemToWishList(activeProduct);
    toast({
      title: `Product ${activeProduct.name} added to WishList`,
      description: "Items on wish list are marked with Heart",
      className: "border border-yellow-5",
    });
  };

  return (
    <main>
      <section className="px-4 lg:px-[120px] py-10 md:py-12">
        <div className="flex flex-wrap gap-3">
          <Link href={"/"}>
            <Button
              variant={"outline"}
              className="rounded-full hover:bg-inherit hover:text-wprimary  gap-3 px-4 py-2 bg-transparent text-[#BCBCBC] border border-[#BCBCBC]"
            >
              <ArrowLeft />
              Home
            </Button>
          </Link>
          <Button
            variant={"outline"}
            className="hidden md:flex rounded-full hover:bg-inherit hover:text-wprimary  gap-3 px-4 py-2 bg-transparent text-[#BCBCBC] border border-[#BCBCBC]"
          >
            <ArrowLeft />
            Eyecream
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full bg-wprimary text-white hover:bg-wprimary hover:text-white   gap-3 px-4 py-2  border border-[#BCBCBC]"
          >
            <ArrowRight />
            Estée Lauder
          </Button>
        </div>

        <main className="flex flex-col lg:flex-row w-full mt-16">
          {/** Image Section */}
          <div className="w-full lg:w-1/2 mb-10 md:mb-0">
            <div className="flex flex-col items-center md:border  rounded-xl">
              <Image
                src={`/assets/favor/${activeProduct.image}`}
                alt="product_image"
                width={200}
                height={200}
              />
              <Separator className="hidden md:flex" />
              <Image
                src={`/assets/favor/${activeProduct.image}`}
                className="hidden md:flex rotate-90"
                alt="product_image"
                width={240}
                height={240}
              />
            </div>
          </div>

          {/** Content Section */}
          <div className="w-full lg:w-1/2 sticky top-0 right-0 px-0 md:px-10">
            <div className="w-full flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <svg
                  width="88"
                  height="17"
                  viewBox="0 0 88 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M79.5383 1.89122C79.7091 1.48057 80.2909 1.48057 80.4617 1.89121L81.9987 5.58681C82.0707 5.75993 82.2336 5.87821 82.4204 5.89319L86.4102 6.21305C86.8535 6.24859 87.0332 6.80184 86.6955 7.09118L83.6557 9.69503C83.5133 9.81701 83.4512 10.0084 83.4947 10.1908L84.4234 14.084C84.5265 14.5167 84.0559 14.8586 83.6764 14.6268L80.2606 12.5404C80.1006 12.4427 79.8994 12.4427 79.7394 12.5404L76.3236 14.6268C75.9441 14.8586 75.4735 14.5167 75.5766 14.084L76.5053 10.1908C76.5488 10.0084 76.4867 9.81701 76.3443 9.69503L73.3045 7.09118C72.9668 6.80184 73.1465 6.24859 73.5898 6.21305L77.5796 5.89319C77.7664 5.87821 77.9293 5.75993 78.0013 5.58681L79.5383 1.89122Z"
                    fill="#BCBCBC"
                  />
                  <path
                    d="M61.5383 1.89122C61.7091 1.48057 62.2909 1.48057 62.4617 1.89121L63.9987 5.58681C64.0707 5.75993 64.2336 5.87821 64.4204 5.89319L68.4102 6.21305C68.8535 6.24859 69.0332 6.80184 68.6955 7.09118L65.6557 9.69503C65.5133 9.81701 65.4512 10.0084 65.4947 10.1908L66.4234 14.084C66.5265 14.5167 66.0559 14.8586 65.6764 14.6268L62.2606 12.5404C62.1006 12.4427 61.8994 12.4427 61.7394 12.5404L58.3236 14.6268C57.9441 14.8586 57.4735 14.5167 57.5766 14.084L58.5053 10.1908C58.5488 10.0084 58.4867 9.81701 58.3443 9.69503L55.3045 7.09118C54.9668 6.80184 55.1465 6.24859 55.5898 6.21305L59.5796 5.89319C59.7664 5.87821 59.9293 5.75993 60.0013 5.58681L61.5383 1.89122Z"
                    fill="#EFB319"
                  />
                  <path
                    d="M43.5383 1.89122C43.7091 1.48057 44.2909 1.48057 44.4617 1.89121L45.9987 5.58681C46.0707 5.75993 46.2336 5.87821 46.4204 5.89319L50.4102 6.21305C50.8535 6.24859 51.0332 6.80184 50.6955 7.09118L47.6557 9.69503C47.5133 9.81701 47.4512 10.0084 47.4947 10.1908L48.4234 14.084C48.5265 14.5167 48.0559 14.8586 47.6764 14.6268L44.2606 12.5404C44.1006 12.4427 43.8994 12.4427 43.7394 12.5404L40.3236 14.6268C39.9441 14.8586 39.4735 14.5167 39.5766 14.084L40.5053 10.1908C40.5488 10.0084 40.4867 9.81701 40.3443 9.69503L37.3045 7.09118C36.9668 6.80184 37.1465 6.24859 37.5898 6.21305L41.5796 5.89319C41.7664 5.87821 41.9293 5.75993 42.0013 5.58681L43.5383 1.89122Z"
                    fill="#EFB319"
                  />
                  <path
                    d="M25.5383 1.89122C25.7091 1.48057 26.2909 1.48057 26.4617 1.89121L27.9987 5.58681C28.0707 5.75993 28.2336 5.87821 28.4204 5.89319L32.4102 6.21305C32.8535 6.24859 33.0332 6.80184 32.6955 7.09118L29.6557 9.69503C29.5133 9.81701 29.4512 10.0084 29.4947 10.1908L30.4234 14.084C30.5265 14.5167 30.0559 14.8586 29.6764 14.6268L26.2606 12.5404C26.1006 12.4427 25.8994 12.4427 25.7394 12.5404L22.3236 14.6268C21.9441 14.8586 21.4735 14.5167 21.5766 14.084L22.5053 10.1908C22.5488 10.0084 22.4867 9.81701 22.3443 9.69503L19.3045 7.09118C18.9668 6.80184 19.1465 6.24859 19.5898 6.21305L23.5796 5.89319C23.7664 5.87821 23.9293 5.75993 24.0013 5.58681L25.5383 1.89122Z"
                    fill="#EFB319"
                  />
                  <path
                    d="M7.53834 1.89122C7.70914 1.48057 8.29086 1.48057 8.46166 1.89121L9.99874 5.58681C10.0707 5.75993 10.2336 5.87821 10.4204 5.89319L14.4102 6.21305C14.8535 6.24859 15.0332 6.80184 14.6955 7.09118L11.6557 9.69503C11.5133 9.81701 11.4512 10.0084 11.4947 10.1908L12.4234 14.084C12.5265 14.5167 12.0559 14.8586 11.6764 14.6268L8.26063 12.5404C8.10062 12.4427 7.89938 12.4427 7.73937 12.5404L4.32363 14.6268C3.94408 14.8586 3.47345 14.5167 3.57665 14.084L4.50534 10.1908C4.54884 10.0084 4.48665 9.81701 4.34426 9.69503L1.30453 7.09118C0.966758 6.80184 1.14652 6.24859 1.58985 6.21305L5.57955 5.89319C5.76645 5.87821 5.92925 5.75993 6.00126 5.58681L7.53834 1.89122Z"
                    fill="#EFB319"
                  />
                </svg>

                <span>21 Reviews</span>
              </div>
              <h2 className="text-[#141718] text-2xl">
                Estée Lauder Advanced Night Repair Eye Supercharged Complex
              </h2>
              <span className="text-[#6C7275]">
                Lightweight gel-cream that absorbs quickly without leaving a
                greasy residue.
              </span>
              <div className="flex items-center gap-1">
                <span>
                  <strong>$199.00</strong>
                </span>
                <span className="line-through">$400.00</span>
              </div>

              <RadioGroup
                defaultValue="option-one"
                orientation="horizontal"
                className="flex items-center  gap-3 md:hidden my-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                    className="border-2 data-[state=checked]:bg-[#E99FB2] data-[state=checked]:text-[#E99FB2] border-[#E99FB2]"
                  />
                  <Label htmlFor="option-one">15 ML</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-two"
                    id="option-two"
                    className="border-2 data-[state=checked]:bg-[#E99FB2] data-[state=checked]:text-[#E99FB2] border-[#E99FB2]"
                  />
                  <Label htmlFor="option-two">50 ML</Label>
                </div>
              </RadioGroup>

              <div className="w-full flex flex-col gap-8 ">
                <div className="flex gap-3">
                  <QuantityButton />
                  <Button
                    className="bg-transparent gap-2 hover:border-wprimary hover:text-wprimary w-full hover:bg-transparent text-wfont2"
                    size={"default"}
                    variant={"outline"}
                  >
                    <Heart /> Wishlist
                  </Button>
                </div>
                <Button
                  onClick={simulateAddToCart}
                  className="bg-wprimary w-full hover:bg-wprimary"
                >
                  Add to cart
                </Button>
                <div className="flex flex-col">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-5">
                      <span>SKU</span>
                      <span>1089</span>
                    </div>
                    <div className="flex items-center gap-5">
                      <span>CATEGORY</span>
                      <span>Eyecream</span>
                    </div>
                  </div>
                  <Accordion
                    type="single"
                    defaultValue="item-1"
                    collapsible
                    className="w-full mt-10"
                  >
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="border-b">
                        Additional Info
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col text-wfont2 mt-5 gap-5">
                          <h2 className=" text-sm font-semibold">Details</h2>

                          <p>
                            The Estée Lauder Advanced Night Repair Eye
                            Supercharged Complex is a powerful eye cream
                            designed to combat multiple signs of aging and
                            fatigue around the delicate eye area. This cream is
                            formulated to reduce the appearance of fine lines,
                            wrinkles, puffiness, and dark circles, providing a
                            brighter, more youthful look.
                          </p>

                          <RadioGroup
                            defaultValue="option-one"
                            orientation="horizontal"
                            className="gap-3 hidden md:flex"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option-one"
                                id="option-one"
                                className="border-2 data-[state=checked]:bg-[#E99FB2] data-[state=checked]:text-[#E99FB2] border-[#E99FB2]"
                              />
                              <Label htmlFor="option-one">15 ML</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option-two"
                                id="option-two"
                                className="border-2 data-[state=checked]:bg-[#E99FB2] data-[state=checked]:text-[#E99FB2] border-[#E99FB2]"
                              />
                              <Label htmlFor="option-two">50 ML</Label>
                            </div>
                          </RadioGroup>

                          <div className="flex flex-col space-y-5">
                            <h2 className=" text-sm font-semibold">Size</h2>

                            <div className="flex flex-col">
                              <span>
                                Width: 20&quot; Height: 1 ½&quot; Length: 21 ½
                                &quot;{" "}
                              </span>
                              <span>Weight: 0.5 oz </span>
                              <span>Package(s): 1</span>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b-0">
                      <AccordionTrigger className="border-b">
                        Questions
                      </AccordionTrigger>
                      <AccordionContent>
                        <div>
                          <div className="mt-5">
                            Yes. It comes with default styles that matches the
                            other components&apos; aesthetic.
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-0">
                      <AccordionTrigger
                        className="border-b"
                        onClick={toggleReview}
                      >
                        Reviews (21)
                      </AccordionTrigger>
                      {/**<AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable
                        it if you prefer.
                      </AccordionContent> */}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div
          className={cn(
            "w-full flex flex-col transition-all overflow-hidden mt-0",
            review
              ? "h-full animate-accordion-down"
              : "h-0 animate-accordion-down"
          )}
        >
          {reviews.map((review) => {
            return (
              <div
                key={review.title}
                className="flex flex-col border-b last-of-type:border-b-0 border-b-[#CBCBCB] p-[12px]"
              >
                <div className="flex items-center justify-start">
                  <Image
                    src={review.image}
                    alt={`${review.title}`}
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col gap-2 ml-3">
                    <span className="font-semibold">{review.name}</span>
                    <div className="flex">
                      <Rating count={review.rating} />
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span>26/07/24</span>
                  </div>
                </div>
                <div className="flex flex-col mt-3 gap-3 ml-0 md:ml-[65px]  w-[600px]">
                  <h2 className="font-medium text-wfont2">{review.title}</h2>
                  <span className="text-[#5F5F5F]">{review.content}</span>
                </div>
                <div className="w-full flex gap-3 mt-1  ml-0 md:ml-[65px] flex-wrap items-center">
                  {review.attachments.map((img) => {
                    return (
                      <Image
                        key={img}
                        src={img}
                        alt="attachments"
                        width={100}
                        height={100}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Productpage;
