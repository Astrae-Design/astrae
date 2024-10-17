import { Megaphone } from "lucide-react";

const DashboardInfoBanner = () => {
  return (
    <div className=" w-full bg-[#0245A6] hidden md:block">
      <div className=" container py-1.5 flex items-center justify-center">
        <h4 className=" text-white uppercase text-sm font-medium inline-flex items-center gap-4">
          <Megaphone /> 2 New premium templates added in Marketplace
        </h4>
      </div>
    </div>
  );
};

export default DashboardInfoBanner;
