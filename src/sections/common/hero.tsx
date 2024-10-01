"use client";

import PrimaryButton from "@/components/common/primarybutton";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[680px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: 'url("/assets/stars.png")',
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: "800px",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 120,
      }}
    >
      <div className=" absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(2,69,166,.3)_15%,rgb(2,69,166,.3)_78%,transparent)]"></div>

      <motion.div
        animate={{
          rotate: "1turn",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className=" absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px]  rounded-full border border-white/20 top-1/2 left-1/2 opacity-40 "
      >
        <div className=" absolute inline-flex items-center justify-center h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className=" absolute inline-flex items-center justify-center h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
      </motion.div>
      <motion.div
        animate={{
          rotate: "-1turn",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className=" absolute h-[444px] md:h-[780px] md:w-[780px] w-[444px] rounded-full border border-white opacity-30 top-1/2 left-1/2 border-dashed"
      >
        <div className=" absolute inline-flex items-center justify-center h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className=" absolute inline-flex items-center justify-center h-4 w-4 top-1/2 left-0 border border-white rounded-full -translate-x-1/2 translate-y-1/2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className=" absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20 top-1/2 left-1/2"
      >
        <div className=" absolute inline-flex items-center justify-center h-12 w-12  md:h-20 md:w-20 top-1/2 left-0 bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 translate-y-1/2">
          <div className=" relative h-8 w-8 md:h-12 md:w-12">
            <Image
              fill
              src="/assets/icons/icon-react.svg"
              alt="Tailwindcss"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" absolute inline-flex items-center justify-center h-12 w-12  md:h-20 md:w-20 top-1/2 left-full bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 translate-y-1/2">
          <div className=" relative h-8 w-8 md:h-12 md:w-12 -mb-2 ml-1">
            <Image
              fill
              src="/assets/icons/icon-next-js.svg"
              alt="Next.js"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" absolute inline-flex items-center justify-center h-12 w-12  md:h-20 md:w-20 top-full left-1/2 bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className=" relative h-6 w-6 md:h-9 md:w-9">
            <Image
              fill
              src="/assets/icons/icon-framer-motion.svg"
              alt="Tailwindcss"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" absolute inline-flex items-center justify-center h-12 w-12  md:h-20 md:w-20 top-0 left-1/2 bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className=" relative h-6 w-6 md:h-9 md:w-9">
            <Image
              fill
              src="/assets/icons/icon-shadcn.svg"
              alt="Shadcn"
              className=" object-contain"
            />
          </div>
        </div>
      </motion.div>
      <div className=" container relative mt-12 md:mt-0">
        <h1 className=" text-5xl md:text-6xl lg:text-8xl md:leading-none font-semibold tracking-tighter text-transparent bg-clip-text text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(2,69,166,.5))]">
          React Template Marketplace For Stunning Sites
        </h1>
        <p className=" text-base md:text-xl text-white/70 mt-2 md:mt-2 text-center max-w-2xl mx-auto">
          Build class leading websites with speed. Access an ever-growing
          collection of premium, meticulously crafted templates. Save time and
          focus on what matters — building standout websites that captivate your
          audience.
        </p>
        <div className="flex justify-center items-center gap-4 mt-5">
          <PrimaryButton>Explore Our Collection</PrimaryButton>
        </div>
      </div>
    </motion.section>
  );
};
