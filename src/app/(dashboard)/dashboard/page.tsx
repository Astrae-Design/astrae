"use client";

import { Button } from "@/components/ui/button";
import { logout } from "../../../../actions/logout";

const Dashboard = () => {
  const logOutUser = () => {
    logout();
  };
  return (
    <div className=" text-white h-screen w-full items-center justify-center flex flex-col">
      <p className=" text-xl">Welcome to dashboard</p>
      <Button onClick={logOutUser} variant="destructive" className=" mt-4">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
