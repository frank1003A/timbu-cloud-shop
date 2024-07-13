import { Blog } from "@/types";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="group relative min-w-0 md:min-w-[280px]  bg-transparent overflow-hidden ">
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-fit h-fit overflow-hidden">
          <Image
            src={`/assets/blogs/${blog.image}`}
            className="mt-auto border rounded-xl border-[#9D9D9D]"
            alt="blog image
            "
            width={350}
            height={200}
          />
          <div className="absolute transition-all group-hover:animate-in animate-out hidden group-hover:block inset-0 bg-black/20 rounded-xl">
            <div className="flex w-full h-full items-center gap-2 justify-center">
              <button className="p-2 bg-wprimary text-white rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
        <span className="mt-4">{blog.date}</span>
      </div>
      <div className="flex flex-col mt-5 gap-3">
        <h1 className="text-[#161D25] font-bold text-[18px]"> {blog.title}</h1>
        <span className="text-[#959EAD] text-[14px] leading-[20px]">
          {blog.content}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
