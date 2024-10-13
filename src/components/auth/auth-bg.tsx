"use client";

import VerticalCards from "@/sections/vertical-cards";

const AuthBackground = () => {
  return (
    <div className=" h-screen overflow-y-clip w-full">
      <div className=" relative">
        <VerticalCards />
        <div className="w-full h-full absolute opacity-70 bg-gradient-to-b from-black/80 to-[#0096FA] backdrop-blur-[2px]  inset-0 flex items-center justify-center" />
      </div>
    </div>
  );
};

export default AuthBackground;
