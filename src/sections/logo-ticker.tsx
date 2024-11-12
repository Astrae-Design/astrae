"use client";

import { companyLogo } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 md:mt-8">
      <div className=" container">
        <div className="flex items-center gap-5">
          <div className=" flex-1 md:flex-none">
            <h2 className=" text-white">Trusted by top innovated teams</h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              }}
              className="flex flex-none gap-8 md:gap-14 -translate-x-1/2"
            >
              {companyLogo.map((logo, idx) => (
                <Image
                  width={120}
                  height={1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`/assets/company/${logo}`}
                  alt="Company logo"
                  className="object-contain"
                  key={idx}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
