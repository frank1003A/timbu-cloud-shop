import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#F8F2EB] z-50">
      <div className="flex items-center justify-center w-full h-full text-white">
        <span className="font-semibold text-sm">
          <Image
            unoptimized
            src={"/assets/loadanime.gif"}
            className="animate-pulse"
            alt="loading_gif"
            width={200}
            height={200}
          />
        </span>
      </div>
    </div>
  );
};

export default Loading;
