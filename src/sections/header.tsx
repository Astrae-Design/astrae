"use client";

import { Cart } from "@/components/common/cart";
import MobileNavigation from "@/components/common/mobile-navigation";
import PrimaryButton from "@/components/common/primarybutton";
import { MarketplaceMenu } from "@/components/common/products-menu";
import { Button } from "@/components/ui/button";
import { useCurrentRole } from "@/hooks/use-current-role";
import { useCurrentUser } from "@/hooks/use-current-user";
import { CircleFadingArrowUp, Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

const headerVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
  },
};

export const Header = () => {
  const { user, isLoading } = useCurrentUser();
  const { role, loadingRole } = useCurrentRole();
  const pathName = usePathname();
  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="py-2.5 md:py-4 border-b border-white/15 lg:border-none sticky top-0 z-[2147483000] w-full"
    >
      <div className=" absolute inset-0 backdrop-blur -z-10 lg:hidden"></div>
      <div className="w-full container">
        <div className="flex justify-between items-center lg:border border-white/15 lg:bg-black/80 lg:backdrop-blur lg:p-2.5 rounded-xl max-w-full mx-auto relative">
          <div className=" w-fit lg:w-full flex items-center">
            <Link className="h-7 z-[2147483006]" href="/">
              <div className="inline-flex gap-1.5 justify-center items-center shrink-0 text-nowrap">
                <div className="h-7 w-7 relative">
                  <Image fill src="/assets/logo.svg" alt="Logo" />
                </div>
                <span className=" text-white font-semibold text-base inline-flex gap-1">
                  Astrae{" "}
                  {pathName.startsWith("/products") ? (
                    <span className=" font-medium opacity-50 hidden md:block">
                      Marketplace
                    </span>
                  ) : (
                    <></>
                  )}
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:block lg:w-full">
            <nav className=" flex gap-8 items-center justify-center text-sm lg:text-sm w-fit">
              <MarketplaceMenu />
              <Link
                className="text-white/70 -ml-4 hover:text-white transition"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href="/showcase"
              >
                Showcase
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href="/blog"
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center justify-end w-full">
            <div className="flex items-center gap-2">
              <div className=" inline-flex items-center gap-1">
                <div className=" hidden lg:block">
                  <Cart />
                </div>

                {!user && !isLoading ? (
                  <div className="flex items-center gap-3">
                    <Link href="/welcome">
                      <Button
                        variant="secondary"
                        className="hidden lg:block bg-transparent hover:bg-transparent"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link className="w-fit hidden md:block" href="/pricing">
                      <PrimaryButton>Get Unlimited Access</PrimaryButton>
                    </Link>
                    <Link className="w-fit md:hidden" href="/pricing">
                      <PrimaryButton>Get Access</PrimaryButton>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    {user?.subscriptionType === "FREE" && (
                      <>
                        <Link className=" hidden md:block" href="/pricing">
                          <div className=" opacity-70 hover:opacity-100 text-sm transition-all ease-in-out h-10 gap-2 flex items-center justify-center">
                            <p className=" capitalize">Upgrade</p>
                            <CircleFadingArrowUp size={18} />
                          </div>
                        </Link>
                        <Link className="md:hidden" href="/pricing">
                          <PrimaryButton>
                            Upgrade
                            <CircleFadingArrowUp
                              className=" ml-1.5"
                              size={18}
                            />
                          </PrimaryButton>
                        </Link>
                      </>
                    )}
                    {user?.subscriptionType === "PRO" && (
                      <div className=" bg-emerald-500/15 text-emerald-500 p-3 rounded-md text-sm h-10 gap-2 flex items-center justify-center">
                        <p className=" capitalize">Premium</p>
                        <Gem size={18} />
                      </div>
                    )}
                    <Link
                      className=" hidden md:block"
                      href={
                        role === "ADMIN" && !loadingRole
                          ? "/admin/dashboard"
                          : "/dashboard"
                      }
                    >
                      <PrimaryButton>My Dashboard</PrimaryButton>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:hidden">
              <Cart />
            </div>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
