"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VerticalCards = () => {
  return (
    <div className="bg-black flex -ml-32 md:-ml-4">
      <div className="flex flex-col items-center mb-4">
        <CardItem list={card.one} duration={125} />
        <CardItem list={card.one} duration={125} />
        <CardItem list={card.one} duration={125} />
      </div>
      <div className="flex flex-col items-center mb-4">
        <CardItem reverse list={card.two} duration={275} />
        <CardItem reverse list={card.two} duration={275} />
        <CardItem reverse list={card.two} duration={275} />
      </div>
      <div className="flex flex-col items-center mb-4">
        <CardItem list={card.three} duration={500} />
        <CardItem list={card.three} duration={500} />
        <CardItem list={card.three} duration={500} />
      </div>
      <div className="flex flex-col items-center mb-4">
        <CardItem list={card.four} duration={75} />
        <CardItem list={card.four} duration={75} />
        <CardItem list={card.four} duration={75} />
      </div>
      <div className="flex flex-col items-center mb-4">
        <CardItem reverse list={card.two} duration={190} />
        <CardItem reverse list={card.two} duration={190} />
        <CardItem reverse list={card.two} duration={190} />
      </div>
    </div>
  );
};

const CardItem = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof card.one;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateY: reverse ? "-100%" : "0%" }}
      animate={{ translateY: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[400px] flex flex-col rounded-lg overflow-hidden relative mb-4"
          >
            <div className=" w-[400px] h-[32rem] relative">
              <Image
                unoptimized
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={40}
                src={t.img}
                alt="Profile"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

const card = {
  one: [
    {
      id: 1,
      img: "/assets/gallery/1.webp",
    },
    {
      id: 2,
      img: "/assets/gallery/2.webp",
    },
    {
      id: 3,
      img: "/assets/gallery/3.webp",
    },
    {
      id: 4,
      img: "/assets/gallery/4.webp",
    },
    {
      id: 5,
      img: "/assets/gallery/5.webp",
    },
    {
      id: 6,
      img: "/assets/gallery/6.webp",
    },
  ],
  two: [
    {
      id: 1,
      img: "/assets/gallery/16.webp",
    },
    {
      id: 2,
      img: "/assets/gallery/11.webp",
    },
    {
      id: 3,
      img: "/assets/gallery/10.webp",
    },
    {
      id: 4,
      img: "/assets/gallery/13.webp",
    },
    {
      id: 5,
      img: "/assets/gallery/8.webp",
    },
    {
      id: 6,
      img: "/assets/gallery/7.webp",
    },
  ],
  three: [
    {
      id: 1,
      img: "/assets/gallery/6.webp",
    },
    {
      id: 2,
      img: "/assets/gallery/5.webp",
    },
    {
      id: 3,
      img: "/assets/gallery/4.webp",
    },
    {
      id: 4,
      img: "/assets/gallery/3.webp",
    },
    {
      id: 5,
      img: "/assets/gallery/2.webp",
    },
    {
      id: 6,
      img: "/assets/gallery/1.webp",
    },
  ],
  four: [
    {
      id: 1,
      img: "/assets/gallery/9.webp",
    },
    {
      id: 2,
      img: "/assets/gallery/14.webp",
    },
    {
      id: 3,
      img: "/assets/gallery/15.webp",
    },
    {
      id: 4,
      img: "/assets/gallery/12.webp",
    },
    {
      id: 5,
      img: "/assets/gallery/17.webp",
    },
    {
      id: 6,
      img: "/assets/gallery/19.webp",
    },
  ],
};

export default VerticalCards;
