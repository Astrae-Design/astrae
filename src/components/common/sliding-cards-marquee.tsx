"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SlidingCardsMarquee = () => {
  return (
    <div className="bg-black">
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-28 md:w-40 z-10 bg-gradient-to-r from-black to-transparent" />

        <div className="flex items-center mb-4">
          <CardList list={showcaseItems.top} duration={125} />
          <CardList list={showcaseItems.top} duration={125} />
          <CardList list={showcaseItems.top} duration={125} />
        </div>
        <div className="flex items-center">
          <CardList list={showcaseItems.bottom} duration={75} reverse />
          <CardList list={showcaseItems.bottom} duration={75} reverse />
          <CardList list={showcaseItems.bottom} duration={75} reverse />
        </div>

        <div className="absolute top-0 bottom-0 right-[16rem] w-28 md:w-40 z-10 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

const CardList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof showcaseItems.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[320px] h-[220px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <Image
              quality={100}
              fill
              src={t.img}
              alt="Profile"
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

const showcaseItems = {
  top: [
    {
      id: 1,
      img: "/assets/gallery/1.jpg",
    },
    {
      id: 2,
      img: "/assets/gallery/2.jpg",
    },

    {
      id: 3,
      img: "/assets/gallery/3.jpg",
    },
    {
      id: 4,
      img: "/assets/gallery/4.jpg",
    },
  ],

  bottom: [
    {
      id: 1,
      img: "/assets/gallery/5.jpg",
    },
    {
      id: 2,
      img: "/assets/gallery/6.jpg",
    },
    {
      id: 3,
      img: "/assets/gallery/7.jpg",
    },
    {
      id: 4,
      img: "/assets/gallery/8.jpg",
    },
  ],
};

export default SlidingCardsMarquee;
