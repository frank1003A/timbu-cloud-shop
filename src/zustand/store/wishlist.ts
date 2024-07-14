import { Product } from "@/types";
import { create } from "zustand";

interface WishItem extends Product {
  quantity: number;
}
interface WishState {
  items: WishItem[];
  subTotal: number;
  total: number;
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotals: () => void;
}

const TAX_RATE = 0.2;

const useWishListStore = create<WishState>((set) => ({
  items: [],
  subTotal: 0,
  total: 0,

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      const itemPrice = parseFloat(item.price);

      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
        return {
          items: updatedItems,
          subTotal: state.subTotal + itemPrice,
          total: state.total + itemPrice * (1 + TAX_RATE),
        };
      }
      const newItems = [...state.items, { ...item, quantity: 1 }];
      state.calculateTotals();
      return {
        items: newItems,
        subTotal: state.subTotal + itemPrice,
        total: state.total + itemPrice * (1 + TAX_RATE),
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.id === id);
      if (!itemToRemove) return state;

      const itemPrice = parseFloat(itemToRemove.price);
      const updatedItems = state.items.filter((item) => item.id !== id);
      state.calculateTotals();
      return {
        items: updatedItems,
        subTotal: state.subTotal - itemPrice * itemToRemove.quantity,
        total: state.total - itemPrice * itemToRemove.quantity * (1 + TAX_RATE),
      };
    }),

  updateItem: (id, quantity) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      state.calculateTotals();
      return {
        items: updatedItems,
      };
    }),

  clearCart: () =>
    set(() => ({
      items: [],
      subTotal: 0,
      total: 0,
    })),

  calculateTotals: () =>
    set((state) => {
      const subTotal = state.items.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.quantity,
        0
      );
      const total = subTotal * (1 + TAX_RATE);
      return {
        subTotal,
        total,
      };
    }),
}));

export default useWishListStore;
