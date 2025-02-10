/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import ProductCard from "./product-card";

interface ProductListProps {
  items: any[];
  title: string;
  description: string;
}
const ProductList: React.FC<ProductListProps> = ({ items, title, description }) => {
  if (items.length > 0) {
    return (
      <div className=" container py-12">
        <h4 className=" text-4xl md:text-5xl tracking-tighter text-white font-semibold">
          {title}
        </h4>
        <p className=" text-white/70 font-normal text-base mt-2">
         {description}
        </p>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 w-full pb-20 md:pb-0">
          {items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  }
};

export default ProductList;
