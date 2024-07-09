import { Product } from "@/components/data";
import { create } from "zustand";

interface WishItem extends Product {
  quantity: number;
}

interface WishState {
  items: WishItem[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
}

const useWishListStore = create<WishState>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set(() => ({
      items: [],
    })),
}));

export default useWishListStore;
