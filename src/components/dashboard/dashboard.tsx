"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import AllProducts from "./all-products";
import Image from "next/image";

interface ProductListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
}

const UserDashboard: React.FC<ProductListProps> = ({ items }) => {
  const role = useCurrentRole();

  if (role === "ADMIN") {
    return (
      <div>
        <AllProducts items={items} />
      </div>
    );
  } else {
    return (
      <div className=" container h-full w-full flex flex-col items-center justify-center">
        <div className=" w-full h-[12rem] relative">
          <Image
            fill
            className=" object-contain"
            src="/assets/empty-cart.png"
            alt="Empty cart"
            quality={100}
          />
        </div>
        <p>You haven&apos;t purchased any products</p>
      </div>
    );
  }
};

export default UserDashboard;
