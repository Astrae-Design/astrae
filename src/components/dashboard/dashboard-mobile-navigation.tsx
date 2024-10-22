"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "../common/primarybutton";
import { Plus } from "lucide-react";

const DashboardMobileNavigation = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className="sticky top-0 inset-x-0 p-0 lg:hidden">
      <nav className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1.5 relative z-[2147483006]"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 7.5,
              },
            }}
            className="w-6 bg-white rounded-full h-[1.5px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-white rounded-full h-[1.5px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -7.5,
              },
            }}
            className="w-6 bg-white rounded-full h-[1.5px] block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed top-0 inset-0 bg-[#000] px-[8px] flex flex-col justify-center "
              >
                <a className="h-8 absolute top-7 container" href="/">
                  <div className="inline-flex gap-1.5 justify-center items-center">
                    <div className="h-8 w-8 relative">
                      <Image fill src="/assets/logo.svg" alt="Logo" />
                    </div>
                    <span className=" text-white font-semibold text-base md:text-lg">
                      Astrae{" "}
                      <span className=" font-medium opacity-50">
                        AdminDashboard
                      </span>
                    </span>
                  </div>
                </a>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6 container"
                >
                  <li>
                    <a href="/" className="text-4xl font-medium text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashoard"
                      className="text-4xl font-medium text-white"
                    >
                      All Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/analytics"
                      className="text-4xl font-medium text-white"
                    >
                      Analytics
                    </a>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full container mt-8 mb-6"
                >
                  <PrimaryButton>
                    <Plus className="mr-3" /> Add New Template
                  </PrimaryButton>
                </motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex flex-col items-center justify-center container"
                ></motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default DashboardMobileNavigation;
