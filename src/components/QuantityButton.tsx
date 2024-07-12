"usee client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const QuantityButton = () => {
  const [count, setCount] = useState(1); // Start count at 1

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex bg-[#F8E1E780] p-2 px-3 max-w-[125px] min-w-[125px] gap-4 rounded-md items-center justify-evenly">
      <button
        onClick={handleDecrement}
        className="rounded-md bg-[#E99FB2] hover:bg-wprimary text-white hover:bg-transparent"
      >
        <Minus />
      </button>
      <div className="font-bold text-base w-6 h-6 flex items-center justify-center">
        {count}
      </div>
      <button
        onClick={handleIncrement}
        className="rounded-md bg-[#E99FB2] hover:bg-wprimary text-white hover:bg-transparent"
      >
        <Plus />
      </button>
    </div>
  );
};
export default QuantityButton;
