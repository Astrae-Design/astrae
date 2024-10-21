import { Navigation } from "@/components/dashboard/navigation";
import { Separator } from "@/components/ui/separator";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <div className="flex flex-col h-screen w-full overflow-x-hidden items-center">
        <Navigation />
        <div className="h-screen w-full bg-black relative">{children}</div>
        <div className=" w-full absolute bottom-0 py-2 bg-black/80 backdrop-blur-sm z-50">
          <Separator className=" w-full bg-white/20" orientation="horizontal" />
          <div className=" w-full flex items-center pb-3 pt-5 justify-center">
            <div className=" flex items-center gap-2">
              <p className=" text-white">Tweet about Astrae</p>
              <div className="relative h-4 w-4 cursor-pointer opacity-100 hover:opacity-100 transition-all ease-in-out duration-300">
                <Image fill src="/assets/icons/icon-x.svg" alt="Twitter/X" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;
