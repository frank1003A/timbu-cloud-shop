import { Product } from "@/components/data";
import { create } from "zustand";

interface ActiveProductState {
  product: Product;
  addActiveProduct: (product: Product) => void;
}

const useActiveProduct = create<ActiveProductState>()((set) => ({
  product: {
    id: 1,
    image: "",
    name: "",
    description: "",
    price: "",
    rating: "",
  },
  addActiveProduct: (product) =>
    set(() => {
      return { product: product };
    }),
}));

export default useActiveProduct;
