"use client";
import BlogCard from "@/components/blog/card";
import { blogs, Products } from "@/components/data";
import Loading from "@/components/Loading";
import Card from "@/components/product/Card";
import { Button } from "@/components/ui/button";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loading />}
      {/** Hero */}
      <section className="px-2 lg:px-[120px] py-12">
        <main className="flex flex-col lg:flex-row">
          <div className="px-3 flex md:hidden">
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

          <div className="hidden md:flex flex-col w-full lg:w-1/2 ">
            <Image
              src={"/assets/hero_face.png"}
              alt="makeuponface"
              width={500}
              height={300}
            />
            <p className="text-justify text-sm w-[90%]">
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
          <Marquee pauseOnHover>
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
            {Products.map((product) => {
              return <Card key={product.name} item={product} />;
            })}
          </div>
          <div className="w-full flex">
            <Button
              className="ml-auto bg-wprimary hover:bg-wprimary text-white"
              size={"sm"}
            >
              See More
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
            {Products.map((product) => {
              return <Card hasDiscount key={product.name} item={product} />;
            })}
          </div>
          <div className="w-full flex">
            <Button
              className="ml-auto bg-wprimary hover:bg-wprimary text-white"
              size={"sm"}
            >
              See More
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
