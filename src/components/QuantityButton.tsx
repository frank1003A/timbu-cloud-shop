"usee client";
import { Minus, Plus } from "lucide-react";

const QuantityButton = () => {
  return (
    <div className="flex bg-[#F8E1E780] p-2 px-3 max-w-[125px] gap-4 rounded-md items-center justify-evenly">
      <button className="rounded-md bg-[#E99FB2] hover:bg-wprimary text-white hover:bg-transparent">
        <Minus />
      </button>
      <div className="font-bold text-base">1</div>
      <button className="rounded-md bg-[#E99FB2] hover:bg-wprimary text-white hover:bg-transparent">
        <Plus />
      </button>
    </div>
  );
};

export default QuantityButton;
