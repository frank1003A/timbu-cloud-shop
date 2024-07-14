"usee client";
import useCartStore from "@/zustand/store/cart";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  itemPrice: string;
}
interface Props {
  itemId: string; // Added this prop to identify the item
  itemPrice: string;
}

const QuantityButton = ({ itemId, itemPrice }: Props) => {
  const { updateItem } = useCartStore();
  const unitPrice = parseFloat(itemPrice);
  const [cv, setCV] = useState(1);
  const [pc, setPc] = useState(unitPrice);

  const handleIncrement = () => {
    setCV((prevCount) => {
      const newCount = prevCount + 1;
      setPc(newCount * unitPrice); // Calculate new price based on unit price
      updateItem(itemId, newCount); // Update the item in the cart store
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCV((prevCount) => {
      const newCount = Math.max(prevCount - 1, 1);
      setPc(newCount * unitPrice); // Calculate new price based on unit price
      updateItem(itemId, newCount); // Update the item in the cart store
      return newCount;
    });
  };

  return (
    <div className="grid grid-cols-3 bg-[#F8E1E780] justify-items-center p-2 px-3 w-auto min-w-[100px] gap-4 rounded-md ">
      <button
        onClick={handleDecrement}
        className="rounded-md bg-[#E99FB2] w-6 h-6 hover:bg-wprimary text-white hover:bg-transparent"
      >
        <Minus />
      </button>
      <div>
        <span className="font-bold text-base max-w-6 h-6 flex items-center justify-center">
          {cv}
        </span>
      </div>
      <button
        onClick={handleIncrement}
        className="rounded-md bg-[#E99FB2] w-6 h-6 hover:bg-wprimary text-white hover:bg-transparent"
      >
        <Plus />
      </button>
    </div>
  );
};

export default QuantityButton;
