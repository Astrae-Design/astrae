import AllProducts from "@/components/dashboard/all-products";
import DashboardNavigation from "@/components/dashboard/dashboard-navigation";
import { db } from "@/lib/db";

const Dashboard = async () => {
  const products = await db.product.findMany();
  return (
    <div className="flex flex-col h-screen w-full bg-black">
      <DashboardNavigation />
      <AllProducts items={products} />
    </div>
  );
};

export default Dashboard;
