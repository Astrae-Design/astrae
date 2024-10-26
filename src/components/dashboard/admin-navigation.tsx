"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import Link from "next/link";
import AdminAccountDropdown from "./admin-account-dropdown";
import DashboardMobileNavigation from "./dashboard-mobile-navigation";
import AccountDropdownSkeleton from "./account-dropdown-skeleton";

export const AdminNavigation = () => {
  const { user, isLoading } = useCurrentUser();
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-[2147483000] w-full bg-black">
      <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container ">
        <div className="flex justify-between  items-center md:border border-white/15 md:bg-black/80 md:backdrop-blur md:px-2.5 md:h-16 rounded-xl max-w-full mx-auto relative">
          <div className=" w-full h-fit flex items-center">
            <Link className="h-8" href="/admin/dashboard">
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
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="hidden lg:block">
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
            </div>
          </div>

          <div className="flex w-full items-center justify-end px-0 md:px-6">
            <div className="flex items-center gap-4">
              {isLoading ? (
                <AccountDropdownSkeleton />
              ) : (
                <AdminAccountDropdown user={user} />
              )}
              <DashboardMobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
