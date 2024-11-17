import { AdminNavigation } from "@/components/dashboard/admin-navigation";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-full overflow-x-hidden items-center">
      <AdminNavigation />
      <div className="min-h-screen w-full bg-black relative">{children}</div>
    </div>
  );
};

export default AdminDashboardLayout;
