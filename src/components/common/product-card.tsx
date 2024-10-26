"use client"

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import ProductPreview from "./product-preview";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div className=" w-full group flex flex-col h-fit relative">
      <div
        onClick={onAddToCart}
        className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-14 aspect-square rounded-full absolute right-[5rem] top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center"
      >
        <ShoppingBag />
      </div>
      <ProductPreview previewLink={data.previewLink} />
      <div className=" relative h-[16rem] rounded-xl overflow-clip">
        <Image
          fill
          quality={100}
          src={data.coverImage}
          className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
          alt="Showcase card"
        />
      </div>
      <Link href={`/products/${data.id}`}>
        <h3 className=" text-white text-2xl mt-2">{data?.title}</h3>
        <p className=" text-xl text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
          {data?.price}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
