"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { useCurrentUser } from "@/hooks/use-current-user";
import { CircleFadingArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../common/primarybutton";
import AccountDropdown from "./account-dropdown";
import AdminAccountDropdown from "./admin-account-dropdown";
import DashboardMobileNavigation from "./dashboard-mobile-navigation";

export const Navigation = () => {
  const role = useCurrentRole();
  const user = useCurrentUser();
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-[2147483000] w-full bg-black">
      <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container ">
        <div className="flex justify-between  items-center md:border border-white/15 md:bg-black/80 md:backdrop-blur md:px-2.5 md:py-1 rounded-xl max-w-full mx-auto relative">
          <Link className="h-8" href="/dashboard">
            <div className="inline-flex gap-1.5 justify-center items-center">
              <div className="h-8 w-8 relative">
                <Image fill src="/assets/logo.svg" alt="Logo" />
              </div>
              <span className=" text-white font-semibold text-base md:text-lg">
                Astrae{" "}
                {role === "ADMIN" && (
                  <span className=" font-medium opacity-50">
                    AdminDashboard
                  </span>
                )}
                {role === "USER" && (
                  <span className=" font-medium opacity-50">Dashboard</span>
                )}
              </span>
            </div>
          </Link>
          <div className="hidden lg:block">
            {role === "ADMIN" && (
              <nav className=" flex gap-8 lg:-mr-14 items-center text-sm lg:text-base">
                <Link
                  className="text-white/70 -ml-12 hover:text-white transition"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-white/70 hover:text-white transition"
                  href="/dashboard"
                >
                  All Products
                </Link>
                <Link
                  className="text-white/70 hover:text-white transition"
                  href="/analytics"
                >
                  Analytics
                </Link>
              </nav>
            )}
            {role === "USER" && (
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
            )}
          </div>

          {role === "USER" && (
            <div className="flex gap-4 w-fit items-center px-0 md:px-6">
              <div className=" w-fit">
                <PrimaryButton>
                  <CircleFadingArrowUp size={20} className="mr-2" /> Upgrade
                </PrimaryButton>
              </div>
              <div>
                <AccountDropdown user={user} />
              </div>
            </div>
          )}
          {role === "ADMIN" && (
            <div className="flex w-fit items-center px-0 md:px-6">
              <div className="flex items-center gap-4">
                <AdminAccountDropdown user={user} />
                <DashboardMobileNavigation />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
