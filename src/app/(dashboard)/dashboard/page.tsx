import UserDashboard from "@/components/dashboard/dashboard";
import DashboardNavigation from "@/components/dashboard/dashboard-navigation";

export const revalidate = 0;

const Dashboard = async () => {
  return (
    <div className="flex flex-col h-screen w-full bg-black">
      <DashboardNavigation />
      <UserDashboard />
    </div>
  );
};

export default Dashboard;
