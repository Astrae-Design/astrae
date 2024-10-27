"use client";

import PrimaryButton from "@/components/common/primarybutton";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const ProductNotFound = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
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
    <section className="-mt-28" ref={sectionRef}>
      <div className=" ">
        <motion.div
          style={{
            backgroundPositionY,
            backgroundImage: 'url("/assets/stars.png")',
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          animate={{
            backgroundPositionX: "800px",
          }}
          ref={borderedDivRef}
          className=" py-14 md:py-24 overflow-hidden relative group"
        >
          <div
            className="absolute inset-0 bg-[rgb(2,69,166)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: 'url("/assets/grid-lines.png")',
            }}
          ></div>

          <div className=" relative mt-16 md:mt-8">
            <div className=" w-full flex items-center justify-center">
              <div className=" relative h-52 w-52 md:h-72 md:w-72">
                <Image
                  fill
                  quality={100}
                  className=" object-contain"
                  src="/assets/not-found-img.png"
                  alt="404 image"
                />
              </div>
            </div>
            <h2 className="-mt-12 text-5xl md:text-6xl lg:text-7xl px-4 md:px-0 md:max-w-4xl mx-auto tracking-tighter text-center font-semibold text-white">
              Product Not Found
            </h2>
            <div className=" flex justify-center mt-4">
              <p className=" text-center text-lg md:text-xl md:max-w-sm mx-auto tracking-tight text-white/70 px-12 md:px-0">
                Oops! This product does not exist
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Link href="/products" className=" w-fit">
                <PrimaryButton>
                  <ChevronLeft className=" mr-2" />
                  Back to Products
                  <div className="mr-2" />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductNotFound;
