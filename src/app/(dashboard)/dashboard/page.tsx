import UserDashboard from "@/components/dashboard/dashboard";
import DashboardNavigation from "@/components/dashboard/dashboard-navigation";
import { db } from "@/lib/db";

export const revalidate = 0;

const Dashboard = async () => {
  const products = await db.product.findMany();

  return (
    <div className="flex flex-col h-screen w-full bg-black">
      <DashboardNavigation />
      <UserDashboard items={products} />
    </div>
  );
};

export default Dashboard;
