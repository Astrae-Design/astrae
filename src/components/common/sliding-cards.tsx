"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const slider1 = [
  {
    src: "13.webp",
  },
  {
    src: "14.webp",
  },
  {
    src: "3.webp",
  },
  {
    src: "15.webp",
  },
  {
    src: "5.webp",
  },
  {
    src: "2.webp",
  },
  {
    src: "1.webp",
  },
  {
    src: "18.webp",
  },
];

const slider2 = [
  {
    src: "7.webp",
  },
  {
    src: "8.webp",
  },
  {
    src: "9.webp",
  },
  {
    src: "10.webp",
  },
  {
    src: "11.webp",
  },
  {
    src: "12.webp",
  },
  {
    src: "7.webp",
  },
  {
    src: "8.webp",
  },
];

const SlidingProjects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <div
      ref={container}
      className="overflow-x-hidden mb-12 md:mb-20 w-screen flex flex-col relative bg-transparent z-[1]"
    >
      <motion.div
        style={{ x: x1 }}
        className="flex shrink-0 relative h-[220px] gap-4 w-[168rem] -left-[20vw]"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="relative h-full w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  fill={true}
                  quality={40}
                  alt={"image"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`/assets/gallery/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="flex shrink-0 relative h-[220px] gap-4 w-[168rem] -left-[20vw] mt-4"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="relative h-full w-full">
                <Image
                  className="rounded-lg object-cover object-center"
                  fill={true}
                  quality={40}
                  alt={"image"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`/assets/gallery/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidingProjects;
