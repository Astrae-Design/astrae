"use client";

import { companyLogo } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
const LogoTicker = () => {
  return (
    <section className="py-20 md:py-12">
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
                duration: 30,
                ease: "linear",
              }}
              className=" flex flex-none gap-14 -translate-x-1/2"
            >
              {companyLogo.map((logo, idx) => (
                <Image
                  width={170}
                  height={1}
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
