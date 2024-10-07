import Image from "next/image";
import { motion } from "framer-motion";

interface ColumnProps {
  galleryImages: string[];
  y: import("framer-motion").MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ galleryImages, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {galleryImages.map((src, i) => {
        return (
          <div
            key={i}
            className=" w-full h-[28rem] md:h-[40rem] overflow-hidden rounded-lg md:rounded-xl relative"
          >
            <Image
              fill
              quality={10}
              className=" object-cover"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={`/assets/gallery/${src}`}
              alt="Astrae gallery"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
