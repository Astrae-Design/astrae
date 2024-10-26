"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "./primarybutton";

const MobileNavigation = () => {
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
                <a className="h-8 absolute top-5 container" href="/">
                  <div className="inline-flex gap-1.5 justify-center items-center">
                    <div className="h-8 w-8 relative">
                      <Image fill src="/assets/logo.svg" alt="Logo" />
                    </div>
                    <span className=" text-white font-semibold text-base md:text-lg">
                      Astrae
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
                    <a
                      href="/products"
                      className="text-4xl font-medium text-white"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="text-4xl font-medium text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/showcase"
                      className="text-4xl font-medium text-white"
                    >
                      Showcase
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-4xl font-medium text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://studioix.agency"
                      className="text-4xl font-medium text-white"
                    >
                      Studio IX
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
                  <PrimaryButton>Get Unlimited Access</PrimaryButton>
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
                >
                  <a href="/welcome" className="mb-4">
                    <p className=" text-base text-white">Login</p>
                  </a>
                  <div className=" inline-flex items-center mt-4 gap-8">
                    <a href="https://x.com/astraedesign0">
                      <div className="relative h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                        <Image
                          fill
                          src="/assets/icons/icon-x.svg"
                          alt="Twitter/X"
                        />
                      </div>
                    </a>

                    <a href="">
                      <div className="relative h-7 w-7 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                        <Image
                          fill
                          src="/assets/icons/icon-yt.svg"
                          alt="YouTube"
                        />
                      </div>
                    </a>

                    <a href="https://instagram.com/astraedesign0">
                      <div className="relative h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                        <Image
                          fill
                          src="/assets/icons/icon-ig.svg"
                          alt="Instagram"
                        />
                      </div>
                    </a>

                    <a href="">
                      <div className="relative h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                        <Image
                          fill
                          src="/assets/icons/icon-discord.svg"
                          alt="Discord"
                        />
                      </div>
                    </a>
                  </div>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default MobileNavigation;
