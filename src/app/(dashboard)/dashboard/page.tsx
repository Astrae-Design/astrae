"use client";

import UserDashboard from "@/components/dashboard/dashboard";
import DashboardNavigation from "@/components/dashboard/dashboard-navigation";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-black">
      <DashboardNavigation />
      <UserDashboard />
    </div>
  );
};

export default Dashboard;
