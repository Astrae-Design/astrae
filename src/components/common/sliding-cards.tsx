"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const slider1 = [
  {
    src: "13.jpg",
  },
  {
    src: "14.jpg",
  },
  {
    src: "3.jpg",
  },
  {
    src: "15.jpg",
  },
  {
    src: "5.jpg",
  },
  {
    src: "2.jpg",
  },
  {
    src: "1.jpg",
  },
  {
    src: "18.jpg",
  },
];

const slider2 = [
  {
    src: "7.jpg",
  },
  {
    src: "8.jpg",
  },
  {
    src: "9.jpg",
  },
  {
    src: "10.jpg",
  },
  {
    src: "11.jpg",
  },
  {
    src: "12.jpg",
  },
  {
    src: "7.jpg",
  },
  {
    src: "8.jpg",
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
                  quality={100}
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
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
