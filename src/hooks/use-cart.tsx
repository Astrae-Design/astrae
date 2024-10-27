import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import "../app/globals.css";

import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Product already added to cart!", {
            style: {
              border: "1px solid #262626",
              padding: "16px",
              background: "#161616",
              color: "#FFF",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#FFF",
            },
          });
        }

        set({ items: [...get().items, data] });

        toast.success("Product added to cart!", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#10b981",
            secondary: "#FFF",
          },
        });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Product removed from cart!", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#10b981",
            secondary: "#FFF",
          },
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
