import PrimaryButton from "@/components/common/primarybutton";
import AdminDashboardNavigation from "@/components/dashboard/admin-dashboard-navigation";
import AllProducts from "@/components/dashboard/all-products";
import { db } from "@/lib/db";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AdminDashboard = async () => {
  const allProducts = await db.product.findMany();

  return (
    <div className="flex flex-col h-screen w-full bg-black">
      {allProducts.length > 0 && <AdminDashboardNavigation />}
      {allProducts.length === 0 ? (
        <div className=" container h-full w-full flex flex-col items-center justify-center">
          <div className=" w-full h-[12rem] relative md:-mt-20">
            <Image
              fill
              className=" object-contain"
              src="/assets/not-found-img.webp"
              alt="Empty cart"
              quality={100}
            />
          </div>
          <p className=" text-sm -mt-6">
            You haven&apos;t add any templates yet
          </p>
          <div className="mt-6 w-fit text-nowrap">
            <Link href="/admin/dashboard/add-product">
              <PrimaryButton>
                <Plus className="mr-3" size={20} /> Add New Template
              </PrimaryButton>
            </Link>
          </div>
        </div>
      ) : (
        <AllProducts items={allProducts} />
      )}
    </div>
  );
};

export default AdminDashboard;
