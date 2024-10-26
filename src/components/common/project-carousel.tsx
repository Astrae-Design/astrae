"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  const loopedImages = [...images, images[0]];
  return (
    <div className=" w-full relative">
      <div className="absolute top-0 bottom-0 left-0 w-28 md:w-52 z-[2] bg-gradient-to-r from-black to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-28 md:w-52 z-[2] bg-gradient-to-l from-black to-transparent" />
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="md:pl-6 pl-5 pr-5 md:pr-0">
          {loopedImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:pl-1 md:basis-1/2 lg:basis-[45%] md:px-4"
            >
              <div className="w-full h-[24rem] md:h-[40rem] relative rounded-2xl">
                <Image
                  quality={100}
                  fill
                  src={image}
                  className="rounded-xl object-cover"
                  alt={`Product image ${index + 1}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
