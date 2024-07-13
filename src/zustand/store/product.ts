// productStore.ts

import { Product } from "@/types";
import { create } from "zustand";

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
}

// Create the Zustand store
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  addProduct: (product: Product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productId: string) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== productId),
    })),
}));
