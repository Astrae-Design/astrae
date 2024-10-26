"use client";

import Image from "next/image";

const UserDashboard = () => {
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
};

export default UserDashboard;
