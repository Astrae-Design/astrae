import AdminDashboardNavigation from "@/components/dashboard/admin-dashboard-navigation";
import AllProducts from "@/components/dashboard/all-products";
import { db } from "@/lib/db";
import Image from "next/image";

const AdminDashboard = async () => {
  const allProducts = await db.product.findMany();

  return (
    <div className="flex flex-col h-screen w-full bg-black">
      <AdminDashboardNavigation />
      {allProducts.length === 0 ? (
        <div className=" container h-full w-full flex flex-col items-center justify-center">
          <div className=" w-full h-[12rem] relative md:-mt-20">
            <Image
              fill
              className=" object-contain"
              src="/assets/not-found-img.png"
              alt="Empty cart"
              quality={100}
            />
          </div>
          <p>You haven&apos;t add any templates yet</p>
        </div>
      ) : (
        <AllProducts items={allProducts} />
      )}
    </div>
  );
};

export default AdminDashboard;
