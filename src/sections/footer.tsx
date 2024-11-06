"use client";

import PrimaryButton from "@/components/common/primarybutton";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col container py-20">
      <div className="w-full flex flex-col md:flex-row items-start md:justify-between">
        <div className="flex flex-col items-start w-full md:w-fit">
          <div className="h-10 inline-flex gap-1.5 justify-center items-center">
            <div className="h-8 w-8 relative">
              <Image fill src="/assets/logo.svg" alt="Logo" />
            </div>
            <span className=" text-white font-semibold text-base md:text-lg hidden md:block">
              Astrae{" "}
              {pathName.startsWith("/products") ? (
                <span className=" font-medium opacity-50">Marketplace</span>
              ) : (
                <></>
              )}
            </span>
          </div>
          <p className="text-white text-sm lg:text-lg mt-2 mb-6 lg:text-nowrap">
            Templates Beyond Ordinary
          </p>
          <Link href="/products">
            <div className=" w-fit">
              <PrimaryButton>Explore Our Collection</PrimaryButton>
            </div>
          </Link>
        </div>

        <div className="w-full flex flex-wrap items-start md:justify-end gap-12 md:gap-28 mt-12 md:mt-0">
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base lg:text-lg text-white">
              Templates
            </h4>
            <div className="flex flex-col items-start gap-2 text-sm lg:text-base font-normal text-white/70">
              <p>Startup Landing Page</p>
              <p>SAAS Landing Page</p>
              <p>SAAS Wailtlist</p>
              <p>Agency Website</p>
              <p>Marketing Page</p>
              <p>Dev Portfolio</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base lg:text-lg text-white">
              Pages
            </h4>
            <div className="flex flex-col items-start gap-2 text-sm lg:text-base font-normal text-white/70">
              <p>Home</p>
              <p>Marketplace</p>
              <p>Pricing</p>
              <p>Contact</p>
              <p>Studio IX</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base lg:text-lg text-white">
              By Makers Of Astrae
            </h4>
            <div className="flex flex-col items-start gap-2 text-sm lg:text-base font-normal text-white/70">
              <Link
                href="https://www.builtwithatlas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white"
              >
                <p>Atlas Labs</p>
              </Link>
              <Link
                href="https://usemidas.app"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white"
              >
                <p>Midas</p>
              </Link>
              <Link
                href="https://stakenetwaitlist.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white"
              >
                <p>Stakenet</p>
              </Link>
              <Link
                href="https://www.studioix.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white"
              >
                <p>Studio IX</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base lg:text-lg text-white">
              Legals
            </h4>
            <div className="flex flex-col items-start gap-2 text-sm lg:text-base font-normal text-white/70">
              <Link href="/legals/license" className=" hover:text-white">
                <p>License</p>
              </Link>
              <Link href="/legals/refunds" className=" hover:text-white">
                <p>Refunds</p>
              </Link>
              <Link href="/legals/privacy-policy" className=" hover:text-white">
                <p>Privacy Policy</p>
              </Link>
              <Link href="/legals/terms" className=" hover:text-white">
                <p>Terms & Conditions</p>
              </Link>
              <div className=" inline-flex items-center mt-2 gap-4">
                <Link href="https://x.com/astraedesign0">
                  <div className="relative h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                    <Image
                      fill
                      src="/assets/icons/icon-x.svg"
                      alt="Twitter/X"
                    />
                  </div>
                </Link>

                <Link href="">
                  <div className="relative h-7 w-7 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                    <Image fill src="/assets/icons/icon-yt.svg" alt="YouTube" />
                  </div>
                </Link>

                <Link href="https://instagram.com/astraedesign0">
                  <div className="relative h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                    <Image
                      fill
                      src="/assets/icons/icon-ig.svg"
                      alt="Instagram"
                    />
                  </div>
                </Link>

                <Link href="">
                  <div className="relative h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition-all ease-in-out duration-300">
                    <Image
                      fill
                      src="/assets/icons/icon-discord.svg"
                      alt="Discord"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator
        orientation="horizontal"
        className=" w-full opacity-20 mb-8 mt-12"
      />
      <p className=" text-white/70 text-sm lg:text-base">
        © 2024 Astrae Design. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
