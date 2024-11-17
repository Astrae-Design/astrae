"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CartItem {
  data: Product;
}

const CartItem: React.FC<CartItem> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <div className=" w-full group flex flex-col h-fit relative">
      <div
        onClick={onRemove}
        className=" cursor-pointer h-12 aspect-square rounded-full absolute right-4 top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center"
      >
        <Trash2 className=" h-5 w-5" />
      </div>
      <div className=" relative h-[12rem] rounded-xl overflow-clip">
        <Image
          fill
          quality={100}
          src={data.coverImage}
          className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
          alt={data?.title}
        />
      </div>
      <h3 className=" text-white text-xl mt-2">{data?.title}</h3>
      <p className=" text-lg text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
        {data?.price}
      </p>
    </div>
  );
};

export default CartItem;
