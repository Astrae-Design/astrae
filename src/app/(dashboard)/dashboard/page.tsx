"use client";

import PrimaryButton from "@/components/common/primarybutton";
import ProductCard from "@/components/common/product-card";
import { Input } from "@/components/ui/input";
import { useCurrentRole } from "@/hooks/use-current-role";
import { ExternalLink, Plus, Search } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  const role = useCurrentRole();

  if (role === "USER") {
    return (
      <div className="h-screen w-full flex flex-col">
        <div className=" w-full flex flex-col md:flex-row md:items-center justify-between z-50 sticky top-16 pt-8 pb-4 bg-black">
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
      <div className=" h-screen w-full flex flex-col">
        <div className=" w-full flex flex-col md:flex-row md:items-center justify-between z-50 sticky top-16 pt-8 pb-4 bg-black">
          <p className=" text-2xl md:text-2xl font-semibold">Admin Dashboard</p>

          <div className="flex items-center mt-4 md:mt-0 gap-2">
            <Input
              placeholder="Search all templates"
              className="h-10 md:min-w-80 bg-black hover:bg-black border border-white/20"
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
    );
  }
};

export default Dashboard;
