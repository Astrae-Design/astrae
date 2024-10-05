"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VerticalCards = () => {
  return (
    <div className="bg-black flex">
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
            <div className=" w-full h-[32rem] relative">
              <Image
                unoptimized
                fill
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
    {
      id: 5,
      img: "/assets/gallery/5.jpg",
    },
    {
      id: 6,
      img: "/assets/gallery/6.jpg",
    },
  ],
  two: [
    {
      id: 1,
      img: "/assets/gallery/16.jpg",
    },
    {
      id: 2,
      img: "/assets/gallery/11.jpg",
    },
    {
      id: 3,
      img: "/assets/gallery/10.jpg",
    },
    {
      id: 4,
      img: "/assets/gallery/13.jpg",
    },
    {
      id: 5,
      img: "/assets/gallery/8.jpg",
    },
    {
      id: 6,
      img: "/assets/gallery/7.jpg",
    },
  ],
  three: [
    {
      id: 1,
      img: "/assets/gallery/6.jpg",
    },
    {
      id: 2,
      img: "/assets/gallery/5.jpg",
    },
    {
      id: 3,
      img: "/assets/gallery/4.jpg",
    },
    {
      id: 4,
      img: "/assets/gallery/3.jpg",
    },
    {
      id: 5,
      img: "/assets/gallery/2.jpg",
    },
    {
      id: 6,
      img: "/assets/gallery/1.jpg",
    },
  ],
  four: [
    {
      id: 1,
      img: "/assets/gallery/9.jpg",
    },
    {
      id: 2,
      img: "/assets/gallery/14.jpg",
    },
    {
      id: 3,
      img: "/assets/gallery/15.jpg",
    },
    {
      id: 4,
      img: "/assets/gallery/12.jpg",
    },
    {
      id: 5,
      img: "/assets/gallery/17.jpg",
    },
    {
      id: 6,
      img: "/assets/gallery/19.jpg",
    },
  ],
};

export default VerticalCards;
