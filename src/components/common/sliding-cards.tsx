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

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div
      ref={container}
      className="slidingImages overflow-x-hidden mb-12 md:mb-20"
    >
      <motion.div style={{ x: x1 }} className="slider">
        {slider1.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div className="imageContainer">
                <Image
                  className="rounded-lg object-cover"
                  fill={true}
                  quality={40}
                  alt={"image"}
                  src={`/assets/gallery/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className="slider mt-[0.8vw]">
        {slider2.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div key={index} className="imageContainer">
                <Image
                  className=" rounded-lg object-cover"
                  fill={true}
                  quality={40}
                  alt={"image"}
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
