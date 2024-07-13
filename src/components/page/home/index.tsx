"use client";
import BlogCard from "@/components/blog/card";
import { blogs } from "@/components/data/data";
import Loading from "@/components/Loading";
import Card from "@/components/product/Card";
import { Button } from "@/components/ui/button";
import { Product, ProductResponse } from "@/types";
import { useProductStore } from "@/zustand/store/product";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const listings = [
  "bodycare",
  "sunscreen",
  "lipcare",
  "exfoliator",
  "facemasks",
  "moisturizers",
  "cleansers",
  "toners",
  "serums",
];
const HomeComponent = () => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const [seeMore, setSeeMore] = useState(false);
  // const { products, isLoading, isError } = useProducts();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { setProducts: setStoreProducts, products: savedProjects } =
    useProductStore();
  const [error, setError] = useState<string | null>(null);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/products"); // Call your custom API route
        if (response.status !== 200) {
          throw new Error("Failed to fetch products");
        }
        const data = response.data;

        // Transform the data if needed to match your desired format
        const transformedProducts = data.items.map(
          (product: ProductResponse) => {
            return {
              id: product.id, // Convert to number if needed
              image:
                `https://api.timbu.cloud/images/${product.photos[0]?.url}` ||
                "",
              name: product.name,
              description: product.description,
              price: product.current_price[0]?.NGN[0]?.toString() || "N/A",
              rating: "4.5", // Assuming no rating data available, adjust as necessary
              status: product.is_available ? "In-stock" : "out of stock",
            };
          }
        );

        setProducts(transformedProducts);
        setStoreProducts(transformedProducts);
      } catch (error) {
        setError("Failed to fetch products");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (error) return <div>failed to load</div>;

  return (
    <>
      {loading && <Loading />}
      {/** Hero */}
      <section className="px-2 lg:px-[120px] py-12">
        <main className="flex flex-col lg:flex-row">
          <div className="px-2 flex md:hidden">
            <div className="w-full rounded-2xl overflow-x-hidden transition-all border border-[#9D9D9D] px-4 py-6 bg-gradient-to-tr from-[#FCF0F3] to-[#DDC3A0] flex items-center justify-evenly">
              <Marquee>
                {listings.map((list) => {
                  return (
                    <div
                      className="px-3 py-1 text-wfont2 font-normal transition-all hover:bg-wprimary hover:text-white rounded-md capitalize"
                      key={list}
                    >
                      {list}
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
          <div className="flex flex-col-reverse  md:flex-col items-center w-full lg:w-1/2">
            <div className="flex flex-col text-[#4F4F4F] text-center  lg:text-start">
              <h1 className="font-bold text-lg md:text-[40px] md:leading-[3.5rem] px-8 md:px-0">
                Unveil Your Inner Radiance Discover the Collection Now!
              </h1>
              <span className=" md:text-balance">
                Pamper your skin seven times, let it glow eight.
              </span>
            </div>
            <Image
              src={"/assets/hero_makeup.png"}
              className="mt-auto"
              alt="makeupitems"
              width={430}
              height={600}
            />
          </div>

          <div className="hidden md:flex flex-col md:text-center items-center  w-full lg:w-1/2 ">
            <Image
              src={"/assets/hero_face.png"}
              alt="makeuponface"
              width={500}
              height={300}
            />
            <p className="text-justify text-sm w-[90%] md:text-center lg:text-start">
              Discover your natural glow with WillowSage Cosmetics. Pure,
              gentle, and effective skincare inspired by nature. Join our
              community and embrace radiant beauty.
            </p>
          </div>
        </main>
      </section>

      {/** */}
      <section className="px-2 lg:px-[100px] py-8 bg-sharp-gradient hidden md:flex">
        <div className="w-full rounded-2xl overflow-x-hidden transition-all border border-[#9D9D9D] px-4 py-6 bg-gradient-to-tr from-[#FCF0F3] to-[#DDC3A0] flex items-center justify-evenly">
          <Marquee pauseOnHover autoFill>
            {listings.map((list) => {
              return (
                <div
                  className="px-3 py-1 text-wfont2 font-normal transition-all hover:bg-wprimary hover:text-white rounded-md capitalize"
                  key={list}
                >
                  {list}
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>

      {/** Favorites */}
      <section id="favorites" className="px-2 lg:px-[120px] py-12 bg-[#fcf0f3]">
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className="font-bold text-4xl">Fans Favourite</h1>
          <p className=" hidden md:flex font-normal text-[20px] mt-2 text-[#5F5F5F]">
            Check our best seller products on Willow website right now
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12 gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-14">
            {savedProjects &&
              savedProjects.slice(0, itemsToShow).map((product) => {
                return <Card key={product.name} item={product as Product} />;
              })}
          </div>
          <div className="w-full flex">
            <Button
              onClick={handleSeeMore}
              className="ml-auto bg-wprimary hover:bg-wprimary text-white"
              size={"sm"}
            >
              {seeMore ? "See Less" : "See More"}
            </Button>
          </div>
        </div>
      </section>

      {/** Banner */}
      <section id="favorites" className="px-2 lg:px-[120px] py-12 bg-[#fcf0f3]">
        <div className="w-full relative h-[400px]">
          <Image
            src={"/assets/banner.jpg"}
            className="rounded-lg "
            alt="banner_image"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/** Glow */}
      <section id="deals" className="px-2 lg:px-[120px] py-12 bg-[#E1C4A5]">
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className="font-bold text-4xl inline-flex">
            <span className="hidden md:flex">Glow Up Today -</span> Special
            Deals!
          </h1>
          <p className="hidden md:flex font-normal text-[20px] mt-2 text-[#5F5F5F]">
            Glow Getters! Don&apos;t Miss Our Best-Selling Skincare Deals!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-12 gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-14">
            {savedProjects &&
              savedProjects.slice(8, 16).map((product) => {
                return <Card key={product.name} item={product as Product} />;
              })}
          </div>
          <div className="w-full flex">
            <Button
              onClick={handleSeeMore}
              className="ml-auto bg-wprimary hover:bg-wprimary text-white"
              size={"sm"}
            >
              {seeMore ? "See Less" : "See More"}
            </Button>
          </div>
        </div>
      </section>

      <section className="px-2 lg:px-[120px] py-14">
        <div className="flex  flex-col text-center md:text-start items-center md:items-start">
          <h1 className="font-normal text-[36px]">Read our blog</h1>
          <p className="font-normal text-[16px] text-[#5F5F5F]">
            {
              "we'll cover everything you need to know to unlock your skin's natural luminosity"
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-x-10 gap-y-14">
            {blogs.map((blog) => {
              return <BlogCard key={blog.date} blog={blog} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
