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
    <header className="py-2.5 md:py-4 border-b border-white/15 md:border-none sticky top-0 z-[2147483000] w-full bg-black">
      <div className=" absolute inset-0 backdrop-blur -z-10 lg:hidden"></div>
      <div className="container w-full ">
        <div className="flex justify-between  items-center lg:border border-white/15 lg:bg-black/80 lg:backdrop-blur lg:px-2.5 lg:h-16 rounded-xl max-w-full mx-auto relative">
          <div className=" w-fit lg:w-full h-fit flex items-center">
            <Link className="h-7 z-[2147483006]" href="/admin/dashboard">
              <div className="inline-flex gap-1.5 justify-center items-center shrink-0 text-nowrap">
                <div className="h-7 w-7 relative">
                  <Image fill src="/assets/logo.svg" alt="Logo" />
                </div>
                <span className=" text-white font-semibold text-base  inline-flex gap-1">
                  Astrae{" "}
                  <span className=" font-medium opacity-50 hidden md:block">
                    AdminDashboard
                  </span>
                </span>
              </div>
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="hidden lg:block">
              <nav className=" flex gap-8 lg:-mr-14 items-center text-sm">
                <Link
                  className="text-white/70 hover:text-white transition"
                  href="/analytics"
                >
                  Analytics
                </Link>
                <Link
                  className="text-white/70 hover:text-white transition"
                  href="/dashboard"
                >
                  Dashbaord
                </Link>
                <Link
                  className="text-white/70 hover:text-white transition"
                  href="/products"
                >
                  Products
                </Link>
                <Link
                  className="text-white/70 hover:text-white transition"
                  href="/documentation"
                >
                  Documentation
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex w-full items-center justify-end px-0 md:px-6">
            <div className="flex items-center gap-4 md:gap-4">
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
