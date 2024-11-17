"use client";

import VerticalCards from "@/sections/vertical-cards";

const GalleryShowcaseMobile = () => {
  return (
    <div className=" w-full md:hidden">
      <div className="spacer"></div>
      <div className="">
        <div className="h-[100vh] relative overflow-clip">
          <VerticalCards />
          <div className="w-full h-full absolute bg-black/60 backdrop-blur-[1px] inset-0 flex items-center justify-center">
            <h3 className=" text-white font-semibold text-5xl text-center tracking-tighter z-10">
              Over 50+ Unique Templates
            </h3>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default GalleryShowcaseMobile;
