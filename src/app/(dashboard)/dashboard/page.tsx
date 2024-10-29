"use client";

import UserDashboard from "@/components/dashboard/dashboard";
import DashboardNavigation from "@/components/dashboard/dashboard-navigation";
import { useCurrentRole } from "@/hooks/use-current-role";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { role, loadingRole } = useCurrentRole();
  const router = useRouter();

  if (!loadingRole && role === "ADMIN") {
    router.push("/admin/dashboard");
  }

  return (
    <div className="flex flex-col h-screen w-full bg-black">
      <DashboardNavigation />
      <UserDashboard />
    </div>
  );
};

export default Dashboard;
