"use client";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const SliderComponent = ({ images }: { images: string[] }) => {
  let sliderRef = useRef<Slider | null>(null).current;

  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };

  return (
    <div
      className={cn(
        "group relative w-full rounded-lg  h-[300px]",
        images.length < 2 ? "overflow-hidden" : ""
      )}
    >
      <button
        onClick={next}
        className="hidden transition-all group-hover:flex hover:scale-110 absolute shadow-2xl inset-y-0 right-2 lg:right-4 my-auto w-8 h-8 z-30 bg-wprimary text-white rounded-full items-center justify-center"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
      <button
        onClick={previous}
        className="hidden transition-all group-hover:flex hover:scale-110 absolute shadow-2xl inset-y-0 left-2 lg:left-4 my-auto w-8 h-8 z-30 bg-wprimary text-white rounded-full items-center justify-center "
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        dots={true}
        appendDots={(dots) => (
          <div
            style={{
              backgroundColor: "transparent",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <ul style={{ margin: "0px", marginTop: "10px" }}> {dots} </ul>
          </div>
        )}
        customPaging={(i) => (
          <div className="h-3 w-3 bg-wprimary rounded-full mt-10" />
        )}
      >
        {images.map((image) => {
          return (
            <div
              key={image}
              className=" text-black relative  rounded-lg overflow-hidden h-[300px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={`${image}`}
                  className="rounded-lg "
                  alt="banner_image"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
