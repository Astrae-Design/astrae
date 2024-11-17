"use client";

import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { MouseEventHandler } from "react";
import PrimaryButton from "./primarybutton";

interface ProductCard {
  data: Product;
}

const AddToCartButton: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div onClick={onAddToCart}>
      <PrimaryButton>Add Product to Cart - {data.price}</PrimaryButton>
    </div>
  );
};

export default AddToCartButton;
