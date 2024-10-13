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

const ProjectCarousel = () => {
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
        <CarouselContent className="pl-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-[45%] px-4"
            >
              <div className="w-full h-[40rem] relative rounded-2xl">
                <Image
                  quality={100}
                  fill
                  src={`/assets/gallery/${index + 1}.jpg`}
                  className="rounded-xl object-cover"
                  alt="Gallery"
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
