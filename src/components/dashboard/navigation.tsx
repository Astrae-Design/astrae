"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { CircleFadingArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../common/primarybutton";
import AccountDropdown from "./account-dropdown";
import AccountDropdownSkeleton from "./account-dropdown-skeleton";

export const Navigation = () => {
  const { user, isLoading } = useCurrentUser();
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-[2147483000] w-full bg-black">
      <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container ">
        <div className="flex justify-between  items-center md:border border-white/15 md:bg-black/80 md:backdrop-blur md:px-2.5 md:h-16 rounded-xl max-w-full mx-auto relative">
          <Link className="h-8" href="/dashboard">
            <div className="inline-flex gap-1.5 justify-center items-center">
              <div className="h-8 w-8 relative">
                <Image fill src="/assets/logo.svg" alt="Logo" />
              </div>
              <span className=" text-white font-semibold text-base md:text-lg">
                Astrae{" "}
                <span className=" font-medium opacity-50">Dashboard</span>
              </span>
            </div>
          </Link>
          <div className="hidden lg:block">
            <nav className=" flex gap-8 lg:-mr-14 items-center text-sm lg:text-base">
              <Link
                className="text-white/70 hover:text-white transition"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href="/dashboard"
              >
                My Products
              </Link>
              <Link
                className="text-white/70 hover:text-white transition"
                href="https://studioix.agency"
              >
                Studio IX
              </Link>
            </nav>
          </div>

          <div className="flex gap-4 w-fit items-center px-0 md:px-6">
            <div className=" w-fit">
              <PrimaryButton>
                <CircleFadingArrowUp size={20} className="mr-2" /> Upgrade
              </PrimaryButton>
            </div>
            <div>
              {isLoading ? (
                <AccountDropdownSkeleton />
              ) : (
                <AccountDropdown user={user} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
