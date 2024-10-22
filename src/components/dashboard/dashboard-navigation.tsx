"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { ExternalLink, Plus, Search } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "../common/primarybutton";
import ProductCard from "../common/product-card";
import { Input } from "../ui/input";

const DashboardNavigation = () => {
  const role = useCurrentRole();

  if (role === "USER") {
    return (
      <div className="w-full flex flex-col">
        <div className=" bg-black border-b border-b-white/10  z-50 sticky top-16 pt-8 pb-4">
          <div className=" w-full flex flex-col md:flex-row md:items-center justify-between bg-black border-b border-b-white/10">
            <p className=" text-2xl md:text-2xl font-semibold">My Templates</p>

            <div className="flex items-center mt-4 md:mt-0 gap-2">
              <Input
                placeholder="Search your templates"
                className="h-10 md:min-w-80 bg-black hover:bg-black border border-white/20"
                startIcon={Search}
              />
              <div className=" w-fit text-nowrap">
                <PrimaryButton>
                  Go To Marketplace <ExternalLink className="ml-3" size={20} />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[200vh] overflow-y-scroll">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black border-b border-b-white/10  z-50 sticky top-16 pt-8 pb-4">
        <div className=" md:hidden container">
          <div className=" w-full flex items-center justify-between">
            <p className=" text-2xl md:text-2xl font-semibold">All Products</p>
            <div className=" w-fit text-nowrap">
              <Link href="/dashboard/add-product">
                <PrimaryButton>
                  <Plus className="mr-3" size={20} /> Add New Template
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className=" hidden md:block">
          <div className=" w-full container flex flex-col md:flex-row md:items-center justify-between bg-black">
            <p className=" text-2xl md:text-2xl font-semibold">All Products</p>

            <div className="flex items-center mt-4 md:mt-0 gap-2 md:gap-4">
              <Input
                placeholder="Search all templates"
                className="h-10 md:min-w-80 "
                startIcon={Search}
              />
              <div className=" w-fit text-nowrap">
                <Link href="/dashboard/add-product">
                  <PrimaryButton>
                    <Plus className="mr-3" size={20} /> Add New Template
                  </PrimaryButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardNavigation;
