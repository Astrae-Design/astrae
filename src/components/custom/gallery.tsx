"use client";

import { galleryImages } from "@/constants";
import Lenis from "@studio-freight/lenis";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Column from "./column";

interface Dimension {
  width: number;
  height: number;
}

const GalleryShowcase: React.FC = () => {
  const gallery = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className=" w-full hidden md:block">
      <div className="spacer"></div>
      <div className=" relative">
        <div className="gallery" ref={gallery}>
          <Column
            galleryImages={[
              galleryImages[0],
              galleryImages[1],
              galleryImages[2],
            ]}
            y={y}
          />

          <Column
            galleryImages={[
              galleryImages[3],
              galleryImages[4],
              galleryImages[5],
            ]}
            y={y2}
          />

          <Column
            galleryImages={[
              galleryImages[6],
              galleryImages[7],
              galleryImages[8],
            ]}
            y={y3}
          />

          <Column
            galleryImages={[
              galleryImages[9],
              galleryImages[10],
              galleryImages[11],
            ]}
            y={y4}
          />
        </div>
        <div className="w-full h-full absolute bg-black/60 backdrop-blur-[1px] inset-0 flex items-center justify-center">
          <h3 className=" text-white font-semibold text-5xl text-center tracking-tighter">
            Over 50+ Unique Templates
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryShowcase;
